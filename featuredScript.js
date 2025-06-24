// // featureScript.js
// window.initFeaturedPage = function () {
//   const data = [
//     {
//       title: "Haptic Brick",
//       image: "./assets/brick.jpg",
//       text: "'Demolish the Lego Castle.' Haptic Brick was made to demonstrate iOS app Brrrowser's enhanced vibration features.",
//       url: "https://haptic-brick.vercel.app"
//     },
//     {
//       title: "Stack over",
//       image: "./assets/stackover.jpg",
//       text: "'Stack Over' is a webgame in which the aim is to stack blocks as high as one can. Game made using R3F and Rapier's physics. ",
//       url: "https://tower-stacker.vercel.app"
//     },
    
//     {
//       title: "Strolling Snowman",
//       image: "./assets/stroll.jpg",
//       text: "'Strolling Snowman' is a 3D Winter puzzle. Step on powdered snow to reach the height necessary to collect all gems and clear levels.",
//       url: "https://strolling-snowman.vercel.app"
//     }
//   ];

//   const grid = document.getElementById("cardGrid");
//   if (!grid) return;

//   data.forEach((item) => {
//     const card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = `
//       <div class="card-inner">
//         <div class="card-front">
//           <img src="${item.image}" alt="${item.title}" />
//           <h3>${item.title}</h3>
//         </div>
//         <div class="card-back">
//           <p>${item.text}</p>
//           <button onclick="window.open('${item.url}', '_self')">Visit</button>
//         </div>
//       </div>
//     `;
//     grid.appendChild(card);
//   });

//   // Flip logic
//   let activeCard = null;
//   document.addEventListener("click", (e) => {
//     const card = e.target.closest(".card");
//     if (card) {
//       if (card === activeCard) {
//         card.classList.remove("flipped");
//         activeCard = null;
//       } else {
//         if (activeCard) activeCard.classList.remove("flipped");
//         card.classList.add("flipped");
//         activeCard = card;
//       }
//     } else {
//       if (activeCard) {
//         activeCard.classList.remove("flipped");
//         activeCard = null;
//       }
//     }
//   });
// };
window.initFeaturedPage = function () {
  const data = [
    {
      title: "Haptic Brick",
      image: "./assets/brick.jpg",
      text: "'Demolish the Lego Castle.' Haptic Brick was made to demonstrate iOS app Brrrowser's enhanced vibration features.",
      url: "https://haptic-brick.vercel.app"
    },
    {
      title: "Stack over",
      image: "./assets/stackover.jpg",
      text: "'Stack Over' is a webgame in which the aim is to stack blocks as high as one can. Game made using R3F and Rapier's physics. ",
      url: "https://tower-stacker.vercel.app"
    },
    {
      title: "Strolling Snowman",
      image: "./assets/stroll.jpg",
      text: "'Strolling Snowman' is a 3D Winter puzzle. Step on powdered snow to reach the height necessary to collect all gems and clear levels.",
      url: "https://strolling-snowman.vercel.app"
    }
  ];

  const grid = document.getElementById("cardGrid");
  if (!grid) return;

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${item.image}" alt="${item.title}" />
      </div>
    </div>
    <h3>${item.title}</h3>
    `;
    card.addEventListener("click", () => showModal(item));
    grid.appendChild(card);
  });
};

function showModal(item) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `

    <div class="modal-card">
  <div class="modal-header">
    <h3>${item.title}</h3>
    <img src="${item.image}" alt="${item.title}" />
  </div>
  <p>${item.text}</p>
  <button onclick="window.open('${item.url}', '_self')">GO</button>
  <button class="close-btn">Close</button>
</div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("close-btn")) {
      modal.remove();
    }
  });
}