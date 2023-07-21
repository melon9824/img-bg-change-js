const imgBox = document.querySelector('.img-box');
const imgWrapper = document.querySelector('.img-wrapper');
const originalImg = document.getElementById('original-img');
const line = document.getElementById('line');

originalImg.style.width = imgBox.offsetWidth + 'px';

const leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e) {
    let boxWidth = (e.pageX - leftSpace) + 'px';
    imgWrapper.style.width = boxWidth;
    line.style.left = boxWidth;
}