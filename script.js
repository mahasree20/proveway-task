// script.jsfirebase login
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove("expanded");
      }
    });
    card.classList.toggle("expanded");
  });
});
