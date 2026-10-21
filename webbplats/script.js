// Hämta nyhetsbrevsformuläret från HTML

const formular = document.querySelector(".nyhetsbrev-form");

// Visa ett tackmeddelande när formuläret skickas

formular.addEventListener("submit", function (event) {
  event.preventDefault();

  const meddelande = document.createElement("p");

  meddelande.textContent = "Tack för din prenumeration på BUONITO!";

  meddelande.style.color = "#234b35";

  formular.after(meddelande);
});
