const imgPopUps = () => {
  const liSelector = document.querySelectorAll(".targetThis");

  for (const li of liSelector) {
    li.addEventListener("click", theClickEvent => {
      document.querySelector(".england__img").style.display = "block";
    });
  }
};

export default imgPopUps;