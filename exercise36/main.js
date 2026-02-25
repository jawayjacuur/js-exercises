const colorPic = document.querySelector('#colorPic')
const colorPreview = document.querySelector('#colorPreview')
const colorHistory = document.querySelector('#colorHistory')
const clearHistoryButton = document.querySelector('#clearHistoryButton')



colorPic.addEventListener('input' , function() {
const selectedColor = colorPic.value;
colorPreview.style.backgroundColor = selectedColor;
addColor(selectedColor)

});



function addColor(colorkaLadortay){

const li = document.createElement('li')
li.textContent = colorkaLadortay
li.style.color = colorkaLadortay
colorHistory.appendChild(li)

};

clearHistoryButton.addEventListener("click", function () {
    while (colorHistory.firstChild) {
        colorHistory.firstChild.remove();
    }
});