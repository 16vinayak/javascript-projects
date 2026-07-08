let new_value = document.body.querySelector(".value")
function random_color()
{
    let r = Math.floor(0 + Math.random()*(256))
    let g = Math.floor(0 + Math.random()*(256))
    let b = Math.floor(0 + Math.random()*(256))

    let rgb_bg_color = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = rgb_bg_color

    new_value.textContent = rgb_bg_color

    if((r+g+b)/3 >= 128)
    {
        document.body.style.color = "black"
    }
    else
    {
        document.body.style.color = "white"
    }
}

let new_btn = document.body.querySelector(".btn")
new_btn.addEventListener("click",random_color)
