var elements = document.getElementsByClassName('anim');
const text = document.getElementById('text');
const background = document.getElementById('background-pattern');

Array.from(document.getElementsByClassName("anim")).forEach((element, index) => {
    element.onmouseover = () => {
        text.classList.add("wordHovered");
        background.classList.add("wordHovered");
        background.dataset.activeIndex = index;
    }
    element.onmouseout = () => {
        text.classList.remove("wordHovered");
        background.classList.remove("wordHovered");
    }
});