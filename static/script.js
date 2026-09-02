const text = "Kenuli Dinethma Bulathsinghela";

let i = 0;
function typing() {
    if (i < text.length) {
        document.querySelector(".terminal-header p").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();

function filterProjects(category) {

    let projects = document.querySelectorAll(".project");

    projects.forEach(project => {

        if (category === "all") {
            project.style.display = "block";
        }

        else if (project.classList.contains(category)) {
            project.style.display = "block";
        }

        else {
            project.style.display = "none";
        }

    });

}

const typedText = document.getElementById("typed-text");
let index = 0;

function type() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150); // typing speed
    }
}

window.addEventListener("load", type);

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Smooth scroll for contact form anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const projectDetails = {

    financial: {
        title: "Financial Performance Dashboard",
        image: "images/financial.png",
        description:
            "Power BI dashboard analyzing revenue, expenses, profitability and financial KPIs.",
        tools: [
            "Power BI",
            "Excel",
            "SQL"
        ]
    },

    churn: {
        title: "Customer Churn Prediction",
        image: "images/churn.png",
        description:
            "Machine learning model predicting customer churn using Python and Scikit-learn.",
        tools: [
            "Python",
            "Pandas",
            "Scikit-learn"
        ]
    },

    sales: {
        title: "Sales Data Analysis",
        image: "images/sales.png",
        description:
            "Analyzed sales data to identify trends, customer behavior and business insights.",
        tools: [
            "SQL",
            "Power BI",
            "Excel"
        ]
    },

    clinic: {
        title: "Eye Clinic Appointment System",
        image: "images/clinic.jpg",
        description:
            "C# based management system for patient appointments, doctor schedules and clinic operations.",
        tools: [
            "C#",
            ".NET",
            "SQL Server"
        ]
    },

    rentmate: {
        title: "RentMate Smart Rental System",
        image: "images/rentmate.png",
        description:
            "Smart rental management application for handling properties, tenants and payments.",
        tools: [
            "Java",
            "Firebase",
            "Android"
        ]
    },

    agile: {
        title: "Agile Project Management",
        image: "images/agile.png",
        description:
            "Managed software projects using Agile methods, sprint planning and task tracking.",
        tools: [
            "Jira",
            "Agile",
            "Scrum"
        ]
    },

    team: {
        title: "Cross-functional Team Leadership",
        image: "images/team.png",
        description:
            "Collaborated with developers, analysts and stakeholders to deliver technology solutions.",
        tools: [
            "Communication",
            "Team Management",
            "Project Planning"
        ]
    }
};

function showProject(project) {

    document.getElementById("project-image").src =
        projectDetails[project].image;

    document.getElementById("project-title").innerText =
        projectDetails[project].title;

    document.getElementById("project-description").innerText =
        projectDetails[project].description;

    let tools = "";

    projectDetails[project].tools.forEach(function (tool) {

        tools += `<span>${tool}</span>`;

    });

    document.getElementById("project-tools").innerHTML = tools;
}