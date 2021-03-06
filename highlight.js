const highlightBackgroundColor = () => {
    const highlightSelector = document.querySelectorAll(".highlight")

    for (const highlight of highlightSelector) {
        highlight.addEventListener("mouseover", (theMouseOverEvent) => {
            highlight.style.color = "white";
        })

        highlight.addEventListener("mouseout", (theMouseOutEvent) => {
            highlight.style.color = "black";
        })
    }
}

export default highlightBackgroundColor;