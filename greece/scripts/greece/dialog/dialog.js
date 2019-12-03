const InitializeBtns = () => {
  const allCloseBtns = document.querySelectorAll("button[id^='close--']");
  allCloseBtns.forEach(btn => {
    btn.addEventListener("click", event => {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    });
  });

  const allOpenBtns = document.querySelectorAll("button[id^='open--']");
  allOpenBtns.forEach(btn => {
    btn.addEventListener("click", event => {
      const dialogElement = document.querySelector(
        `#${event.target.id} + dialog`
      );
      dialogElement.showModal();
    });
  });
};

export default InitializeBtns;
