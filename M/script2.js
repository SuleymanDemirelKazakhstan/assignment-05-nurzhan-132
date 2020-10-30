var image1 = document.getElementById("i1");
var image2 = document.getElementById("i2");
var image3 = document.getElementById("i3");
var image4 = document.getElementById("i4");
var image5 = document.getElementById("i5");


image1.onclick = function() {img1()}
var big = document.querySelector("bigImage img")
function img1(){
    document.getElementById("i1").innerHTML = document.querySelector("bigImage img");
   big.src=image1.src;
}

image2.onclick = function() {img2()}
var big = document.querySelector("bigImage")
function img2(){  
    document.getElementById("i2").innerHTML = document.querySelector("bigImage");
    big.src=image2.src;

}
image3.onclick = function() {img3()}
var big = document.querySelector("bigImage")
function img3(){  
    document.getElementById("i3").innerHTML = document.querySelector("bigImage");
    big.src=image3.src;

}

image4.onclick = function() {img4()}
var big = document.querySelector("bigImage")
function img4(){  
    document.getElementById("i4").innerHTML = document.querySelector("bigImage");
    big.src=image4.src;

}

image5.onclick = function() {img5()}
var big = document.querySelector("#bigImage img")
function img5(){  
    document.getElementById("i5").innerHTML = document.querySelector("#bigImage img");
    big.src=image5.src;

}