const accordian = document.querySelectorAll(".questions");

accordian.forEach(accordian =>{
    const icon = document.querySelector(".icon");
    const answers = document.querySelector(".answers");

    accordian.addEventListener("click",()=>{
        icon.classList.toggle("active");
        answers.classList.toggle("active");
    })
})