const experience = document.querySelector(".experience");
const btns = document.querySelectorAll(".btn");
const experienceContent = document.querySelectorAll(".experience-content");

experience.addEventListener("click", (e) => {
    const dataId = e.target.dataset.id;

    if (dataId) {
        btns.forEach((button) => {
            button.classList.remove("active")
            e.target.classList.add("active")
        })

        experienceContent.forEach((content) => {
            content.classList.remove("active");
        })

        const element = document.getElementById(dataId);
        element.classList.add("active");
    }
})