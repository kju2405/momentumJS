const image=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

const chosenImage=image[Math.floor(Math.random()*image.length)];
const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;
bgImage.className="bgImage";

document.body.appendChild(bgImage);