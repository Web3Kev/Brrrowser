![brrrowser](https://github.com/user-attachments/assets/e5de8747-f671-4077-b84f-5433a9f0b06b)

**Brrrowser** is an iOS web app that unlocks advanced haptics and vibration support for mobile web experiences, including a new `navigator.haptic` API exclusive to the Brrrowser app.

It brings **hardware-level haptic feedback** (Core Haptics) to the web—something Safari and other browsers on iOS do not support. Developers can now deliver richer multisensory experiences directly from the web.

---

## ✨ Features

- ✅ Supports standard [`navigator.vibrate`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate)
- 🔋 Exclusive `navigator.haptic()` API with advanced Core Haptics control
- 🎮 Ideal for games, interactions, simulations, and immersive UI
- 📱 Designed specifically for iOS (iPhone)

---

## 🚀 Get Started

- 🌐 **Download Brrrowser on the app store:**  
  👉 https://web3kev.github.io/Brrrowser/

- 📚 **Look at the API examples:**  
  👉 https://web3kev.github.io/Brrrowser/#api

---

## 🔧 Usage

We recommend using **feature detection** to prioritize high-fidelity `navigator.haptic()` and gracefully fallback to `navigator.vibrate()`:
(following example using Typescript)

```ts
let lastVibrateTime = 0;
const VIBRATE_THROTTLE_MS = 100;

function Haptic(intense: number, sharp: number) {
  if (intense && sharp && intense > 10) {
    const mapForce = (val: number) => {
      if (val >= 150) return 1.0;
      const minVal = 10;
      const maxVal = 150;
      const minMapped = 0.2;
      const maxMapped = 1.0;
      const scaled = (val - minVal) / (maxVal - minVal); 
      return minMapped + scaled * (maxMapped - minMapped);
    };

    const intensity = mapForce(intense);

    if ((navigator as any).haptic) {
      (navigator as any).haptic([
        { intensity: intensity, sharpness: sharp }
      ]);
    } 
    else if ("vibrate" in navigator) {
      const now = Date.now();
      if (now - lastVibrateTime < VIBRATE_THROTTLE_MS) return;
      lastVibrateTime = now;
      navigator.vibrate(5);
    }
  }
}
