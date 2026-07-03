const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeIcon.classList.remove("bi-moon-stars-fill");

    themeIcon.classList.add("bi-sun-fill");

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeIcon.classList.remove("bi-moon-stars-fill");
        themeIcon.classList.add("bi-sun-fill");

        localStorage.setItem("theme","dark");

    }else{

        themeIcon.classList.remove("bi-sun-fill");
        themeIcon.classList.add("bi-moon-stars-fill");

        localStorage.setItem("theme","light");

    }

});
