// selection des variables ou des elements
const modalLibelle = document.querySelector(".modal__libelle");
const btnValue = document.querySelector(".btn");
const listItems = document.querySelector(".modal__libelle-container__lists");
const applyValue = document.querySelector(".apply");
const newBtn = document.querySelector(".new-fruit");
// definition de l'ecouteur
btnValue.addEventListener("click", () => {
  modalLibelle.style.display = "block";
});

listItems.addEventListener("click", (e) => {
  let originalFirstChild = null; // Variable pour mémoriser le premier enfant original

  if (e.target.tagName == "LI") {
    const clickedElement = e.target;

    if (clickedElement.classList.contains("ok")) {
      // Si l'élément contient la classe 'ok', on retire la classe et on supprime l'icône
      clickedElement.classList.remove("ok");

      // Supprimer l'icône SVG
      const svgIcon = clickedElement.querySelector("span");
      if (svgIcon) {
        clickedElement.removeChild(svgIcon);
      }
    } else {
      // Si l'élément ne contient pas la classe 'ok', on l'ajoute et on ajoute l'icône en première position
      clickedElement.classList.add("ok");

      // Créer l'icône SVG
      const svgIcon = `<span><svg viewBox="0 0 24 24" width="24" height="24" fill="#1a73e8"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></span>`;

      // Vérifier si l'élément a un premier enfant et le mémoriser
      const firstChild = clickedElement.firstElementChild;
      if (firstChild && !originalFirstChild) {
        // Mémoriser le premier enfant original avant de le supprimer
        originalFirstChild = firstChild;

        // Supprimer l'ancien premier enfant
        clickedElement.removeChild(firstChild);
      }

      // Ajouter l'icône SVG en premier dans l'élément <LI>
      clickedElement.insertAdjacentHTML("afterbegin", svgIcon);
    }
  }

  // if (e.target.tagName == "LI") {
  //   const clickedElement = e.target;
  //   if (clickedElement.classList.contains("ok")) {
  //     clickedElement.classList.remove("ok");
  //     clickedElement.firstElementChild.parentNode.removeChild(
  //       clickedElement.firstElementChild
  //     );
  //     if (clickedElement.firstElementChild) {
  //       clickedElement.firstElementChild.parentNode.removeChild(
  //         clickedElement.firstElementChild
  //       );
  //     }
  //     // console.log(clickedElement.lastElementChild);
  //   } else {
  //     clickedElement.classList.add("ok");
  //     clickedElement.innerHTML += `<span><svg  viewBox="0 0 24 24" width="24" height="24" fill="#1a73e8"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></span>`;
  //   }
  // }
  const item = listItems.getElementsByClassName("ok");
  console.log(item);

  if (item.length > 0) {
    applyValue.style.display = "block";
    newBtn.style.display = "none";
  } else {
    newBtn.style.display = "block";
    applyValue.style.display = "none";
  }
});
// fermeture de la fenetre
window.onclick = function (e) {
  if (e.target == modalLibelle) {
    modalLibelle.style.display = "none";
  }
};
console.log(listItems);
