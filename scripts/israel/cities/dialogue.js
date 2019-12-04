
const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialog = theEvent.target.parentNode
                dialog.close()
            }
        )
    }

    // Get a reference to all buttons that start with "button--"
    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    // Add an event listener to each one
    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const theDialog = document.querySelector(`#${theEvent.target.id}+dialog`)
                theDialog.showModal()
            }
        )
    }
}

export default initializeDetailButtonEvents