const div1 = document.querySelector('.div-radio-1');
const div2 = document.querySelector('.div-radio-2');
const div3 = document.querySelector('.div-radio-3');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

function toggleRadio (showDiv, hideDivs) {
    showDiv.classList.remove("d-none");
    hideDivs.forEach(div => {
        div.classList.add("d-none");
    });
}

btn1.addEventListener("click", function() {
    toggleRadio(div1, [div2, div3])
});
btn2.addEventListener("click", function() {
    toggleRadio(div2, [div1, div3])
});
btn3.addEventListener("click", function() {
    toggleRadio(div3, [div2, div1])
});