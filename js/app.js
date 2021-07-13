let inputEl = document.getElementById("input-field")
let btnSaveEl = document.getElementById("btn-save")
let listEl = document.getElementById("listed")
let colorX = document.querySelectorAll(".color-box")
let btnDeleteEl = document.getElementById("btn-delete")
let count = 1

inputEl.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        btnSaveEl.onclick()
    }
})

colorX.forEach(colorX => {
    colorX.addEventListener("click", () => {
        let mainColor = colorX.style.backgroundColor
        inputEl.style.backgroundColor = mainColor
    })
})

btnSaveEl.onclick = () => {
    let text = inputEl.value
    if (text == "") {
        alert("خالیه که :(")
        return false
    } else {
        let color = inputEl.style.backgroundColor
        let contentEl = document.createElement("div")
        contentEl.setAttribute("class", "card shadow-sm rounded")
        contentEl.setAttribute("id", "note" + count)
        contentEl.setAttribute("onclick","removeNote(event)")
        contentEl.style.backgroundColor = color

        let textEl = document.createElement("p")
        textEl.setAttribute("class", "card-text p-3")
        textEl.innerHTML = text

        contentEl.appendChild(textEl)

        listEl.appendChild(contentEl)
        count++
        inputEl.value = ""
        inputEl.style.backgroundColor = "white"

    }
}

btnDeleteEl.addEventListener("click", () => {
    inputEl.value = ""
    inputEl.style.background = "white"
})

function removeNote(event){
    let mainNote=event.target.parentNode
    mainNote.remove()
}