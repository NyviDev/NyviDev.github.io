const btns = document.querySelectorAll('.btn')
const btnProject = document.querySelector('#btnProject')
const btnProfessional = document.querySelector('#btnProfessional')
const btnEducation = document.querySelector('#btnEducation')

const projects = document.querySelector('.projects');
const professional = document.querySelector('.professional');
const education = document.querySelector('.education')

btns.forEach((btn => {
    btn.addEventListener('click', (e) => {
        const opition = e.currentTarget.textContent;

        if (opition === "Projetos") {
            btnProject.classList.add('exp-btn')
            btnProfessional.classList.remove('exp-btn')
            btnEducation.classList.remove('exp-btn');

            projects.classList.remove('hide-articles')
            professional.classList.add('hide-articles')
            education.classList.add('hide-articles')
        } else if (opition === "Profissional") {
            btnProfessional.classList.add('exp-btn')
            btnProject.classList.remove('exp-btn')
            btnEducation.classList.remove('exp-btn');

            professional.classList.remove('hide-articles')
            projects.classList.add('hide-articles')
            education.classList.add('hide-articles')
        } else if (opition === "Formação") {
            btnEducation.classList.add('exp-btn')
            btnProject.classList.remove('exp-btn')
            btnProfessional.classList.remove('exp-btn');

            education.classList.remove('hide-articles')
            projects.classList.add('hide-articles')
            professional.classList.add('hide-articles')
        }


    })
}))