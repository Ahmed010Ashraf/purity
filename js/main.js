let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");

icon1.addEventListener("click", toggleIcons);
icon2.addEventListener("click", toggleIcons);

function toggleIcons() {
    icon1.classList.toggle("open");
    icon1.classList.toggle("close");
    icon2.classList.toggle("open");
    icon2.classList.toggle("close");
}




// handel active 

let words = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

words.forEach(element => {
    element.addEventListener("click" , ()=>{
        words.forEach(e=>{
            e.classList.remove("active");
        })
        element.classList.add("active");
    })
    
});




// typewrite 
const text = "اجود انواع العسل و الزيوت الفاخرة";
const speed = 100; 
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
        // if(index==text.length){
        //     document.getElementById("typewriter").innerHTML = "|"
        //     index=0;
        // }
    }
}

typeWriter()