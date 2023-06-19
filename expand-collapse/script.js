document.addEventListener("click", e => {
    if (!e.target.matches(".expand-button")) return
    // When clicked on expand, card-body should be visible
    const card = e.target.closest(".card")
    const cardbody = card.querySelector(".card-body")

    
})

