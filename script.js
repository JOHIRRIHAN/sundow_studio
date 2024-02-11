// locomotive js smooth scrolling
// const scroll = new LocomotiveScroll({
//     main: document.querySelector('#main'),
//     smooth: true
// });

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-img")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
    // alert('heeeee')
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll("#elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var images = e.getAttribute("data-images")
        fixed.style.backgroundImage = `url(${images})`
    })
})
