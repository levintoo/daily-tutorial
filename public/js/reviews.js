// // local reviews
// const reviews = [{
//         id: 1,
//         name: "Ashley",
//         job: "Web developer",
//         img: "img/testimonials/t1.jpg",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maiores?"
//     },
//     {
//         id: 2,
//         name: "Torreto",
//         job: "Android developer",
//         img: "img/testimonials/t2.jpg",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maiores?"
//     },
//     {
//         id: 3,
//         name: "Echo",
//         job: "UX designer",
//         img: "img/testimonials/t1.jpg",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maiores?"
//     },
//     {
//         id: 4,
//         name: "Selena",
//         job: "Web developer",
//         img: "img/testimonials/t2.jpg",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maiores?"
//     }

// ];
// const img = document.getElementById("person-image");
// const author = document.getElementById("author");
// const job = document.getElementById("job");
// const info = document.getElementById("info");

// const prevBtn = document.querySelector('.prev-btn');
// const randomBtn = document.querySelector('.random-btn');
// const nextBtn = document.querySelector('.next-btn');

// let currentItem = 0;

// window.addEventListener("DOMContentLoaded", function () {
//     const item = reviews[currentItem];
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
// });


// function showPerson(person) {
//     const item = reviews[person];
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
// }

// // show next person
// nextBtn.addEventListener("click", function () {
//     currentItem++;
//     if (currentItem > reviews.length - 1) {
//       currentItem = 0;
//     }
//     showPerson(currentItem);
//   });
//   // show prev person
//   prevBtn.addEventListener("click", function () {
//     currentItem--;
//     if (currentItem < 0) {
//       currentItem = reviews.length - 1;
//     }
//     showPerson(currentItem);
//   });
//   // show random person
//   randomBtn.addEventListener("click", function () {
//     console.log("hello");
  
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showPerson(currentItem);
//   });