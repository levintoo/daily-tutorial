let product1 = document.getElementById("product-1");
// let product2 = document.getElementById("product-2");
// let product3 = document.getElementById("product-3");
// let product4 = document.getElementById("product-4");
// let product5 = document.getElementById("product-5");
// let product6 = document.getElementById("product-6");
// let product7 = document.getElementById("product-7");
// let product8 = document.getElementById("product-8");
// let product9 = document.getElementById("product-9");

// document.getElementById("latest").onclick = function () {
//     product1.style.display="none";
//     product2.style.display="none";
//     product3.style.display="block";
//     product4.style.display="none";
//     product5.style.display="block";
//     product6.style.display="none";
//     product7.style.display="none";
//     product8.style.display="none";
//     product9.style.display="block";
// }
// document.getElementById("popular").onclick = function () {
//     product1.style.display="none";
//     product2.style.display="block";
//     product3.style.display="block";
//     product4.style.display="none";
//     product5.style.display="block";
//     product6.style.display="block";
//     product7.style.display="none";
//     product8.style.display="block";
//     product9.style.display="block";
// }
// document.getElementById("upcoming").onclick = function () {
//     product1.style.display="block";
//     product2.style.display="none";
//     product3.style.display="block";
//     product4.style.display="none";
//     product5.style.display="none";
//     product6.style.display="block";
//     product7.style.display="none";
//     product8.style.display="none";
//     product9.style.display="block";
// }
// document.getElementById("all").onclick = function () {
//     product1.style.display="block";
//     product2.style.display="block";
//     product3.style.display="block";
//     product4.style.display="block";
//     product5.style.display="block";
//     product6.style.display="block";
//     product7.style.display="block";
//     product8.style.display="block";
//     product9.style.display="block";
// }

// navigation buttons

document.getElementById("about-btn").onclick = function () {
    document.getElementById("main-section").style.display="none";
    document.getElementById("about-me").style.display="block";
    document.getElementById("brands-area").style.display="block";
    document.getElementById("services").style.display="none";
    document.getElementById("project-area").style.display="none";

    var element = document.getElementById("home-btn");
    element.classList.remove("active");
    var element = document.getElementById("services-btn");
    element.classList.remove("active");
    var element = document.getElementById("about-btn");
element.classList.add("active");
   
    // document.getElementById("customer-reviews").style.display="none";
    // document.getElementById("subscribe-section").style.display="none";
}
document.getElementById("home-btn").onclick = function () {
    document.getElementById("main-section").style.display="block";
    document.getElementById("about-me").style.display="block";
    document.getElementById("brands-area").style.display="block";
    document.getElementById("services").style.display="block";
    document.getElementById("project-area").style.display="block";

    var element = document.getElementById("about-btn");
    element.classList.remove("active");
    var element = document.getElementById("services-btn");
    element.classList.remove("active");
    var element = document.getElementById("home-btn");
element.classList.add("active");
    // document.getElementById("customer-reviews").style.display="block";
    // document.getElementById("subscribe-section").style.display="block";
}

document.getElementById("services-btn").onclick = function () {
    document.getElementById("main-section").style.display="none";
    document.getElementById("about-me").style.display="none";
    document.getElementById("brands-area").style.display="none";
    document.getElementById("services").style.display="block";
    document.getElementById("project-area").style.display="block";

    var element = document.getElementById("about-btn");
    element.classList.remove("active");
    var element = document.getElementById("home-btn");
    element.classList.remove("active");
    var element = document.getElementById("services-btn");
element.classList.add("active");
    // document.getElementById("customer-reviews").style.display="none";
    // document.getElementById("subscribe-section").style.display="none";
}

document.getElementById("blog-btn").onclick = function () {
    alert("looks like levin has no blog yet")
}






