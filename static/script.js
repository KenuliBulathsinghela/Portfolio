

// ===============================
// Project Filtering
// ===============================

function filterProjects(category) {

    const projects = document.querySelectorAll(".project");

    projects.forEach(function (project) {

        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });
}


// ===============================
// Fade-in Sections on Scroll
// ===============================

const sections = document.querySelectorAll("section");

function revealSections() {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }

    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ===============================
// Smooth Scroll
// IMPORTANT: Only handles # links
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        // Ignore empty "#" links
        if (!targetId || targetId === "#") {
            return;
        }

        // Only handle internal page anchors
        if (!targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        // If target does not exist, do nothing
        if (!target) {
            return;
        }

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// Initialize Projects
// ===============================

window.addEventListener("DOMContentLoaded", function () {

    // Show Data Analyst projects initially
    filterProjects("data");

    // Automatically open Financial Performance Dashboard
    if (typeof showProject === "function") {
        showProject("financial");
    }

});

const projectDetails = {

    financial: {
        title: "Financial Performance Dashboard",
        image: "/static/images/financial.png",
        description:
            "Power BI dashboard analyzing revenue, expenses, profitability and financial KPIs.",
        tools: [
            "Power BI",
            "Excel",
            "SQL"
        ],
        github:
            "https://github.com/KenuliBulathsinghela/Business-Intelligence-Projects"
    },

    churn: {
        title: "Customer Churn Prediction",
        image: "/static/images/churn.png",
        description:
            "Machine learning model predicting customer churn using Python and Scikit-learn.",
        tools: [
            "Python",
            "Pandas",
            "Scikit-learn"
        ],
        github:
            "https://github.com/KenuliBulathsinghela/Data-Analytics-Portfolio-Python/tree/main/Telecom%20Customer%20Churn%20Prediction"
    },

    sales: {
        title: "Sales Data Analysis",
        image: "/static/images/sales.png",
        description:
            "Analyzed sales data to identify trends, customer behavior and business insights.",
        tools: [
            "SQL",
            "Power BI",
            "Excel"
        ],
        github:
            "https://github.com/KenuliBulathsinghela/Data-Analytics-Portfolio-Python/tree/main/Sales%20Forecasting%20Model"
    },

    clinic: {
        title: "Eye Clinic Appointment System",
        image: "/static/images/clinic.jpg",
        description:
            "C# based management system for patient appointments, doctor schedules and clinic operations.",
        tools: [
            "C#",
            ".NET",
            "SQL Server"
        ],
        github:
            "https://github.com/KenuliBulathsinghela/EyeClinic"
    },

    rentmate: {
        title: "RentMate Smart Rental System",
        images: [
            "/static/images/rentmate1.png",
            "/static/images/rentmate2.png"
        ],
        description:
            "Smart rental management application for handling properties, tenants and payments.",
        tools: [
            "Java",
            "Firebase",
            "Android"
        ],
        github:
            "https://github.com/KenuliBulathsinghela/RentMate"
    },

    game: {
        title: "Game Recommender System",
        image: "/static/images/game.png",
        description:
            "A hybrid game recommendation system using content-based and collaborative filtering to deliver personalized game recommendations.",
        tools: [
            "Python",
            "Streamlit",
            "Machine Learning"
        ],
        github:
            "https://github.com/KenuliBulathsinghela/game-recommender-system"
    },

    agile: {
        title: "Agile Project Management",
        image: "/static/images/agile.png",
        description:
            "Managed software projects using Agile methods, sprint planning and task tracking.",
        tools: [
            "Jira",
            "Agile",
            "Scrum"
        ],
        github:
            "https://github.com/KenuliBulathsinghela/Agile-Project-Management-Simulation-Jira_Project"
    },

    team: {
        title: "Cross-functional Team Leadership",
        image: "/static/images/team.png",
        description:
            "Collaborated with developers, analysts and stakeholders to deliver technology solutions.",
        tools: [
            "Communication",
            "Team Management",
            "Project Planning"
        ],
        github:
            "https://github.com/KenuliBulathsinghela/ClothingStore"
    },

    document: {
        title: "Technical Documentation",
        image: "/static/images/documentation.png",
        description:
            "Created clear and concise technical documentation for software applications and processes.",
        tools: [
            "Markdown",
            "Documentation",
            "Technical Writing"
        ],
        github:
            "https://drive.google.com/file/d/1Qo4JJdVmjIJQdZTcJveVaOyAvtnxpqnE/view?usp=sharing"
    }
};


/* =========================================
   SHOW PROJECT DETAILS
========================================= */

function showProject(projectName) {

    const details = projectDetails[projectName];

    // Check whether project exists
    if (!details) {
        console.error("Project not found:", projectName);
        return;
    }


    /* -----------------------------------------
       PROJECT IMAGES
    ----------------------------------------- */

    const imageContainer =
        document.getElementById("project-images");

    imageContainer.innerHTML = "";


    // Multiple images
    if (details.images && Array.isArray(details.images)) {

        details.images.forEach(function(imagePath) {

            const img = document.createElement("img");

            img.src = imagePath;
            img.alt = details.title;

            imageContainer.appendChild(img);

        });

    }

    // Single image
    else {

        const img = document.createElement("img");

        img.id = "project-image";
        img.src = details.image;
        img.alt = details.title;

        imageContainer.appendChild(img);

    }


    /* -----------------------------------------
       PROJECT TITLE
    ----------------------------------------- */

    document.getElementById("project-title").textContent =
        details.title;


    /* -----------------------------------------
       PROJECT DESCRIPTION
    ----------------------------------------- */

    document.getElementById("project-description").textContent =
        details.description;


    /* -----------------------------------------
       TOOLS & TECHNOLOGIES
    ----------------------------------------- */

    const toolsContainer =
        document.getElementById("project-tools");

    toolsContainer.innerHTML = "";


    details.tools.forEach(function(tool) {

        const span = document.createElement("span");

        span.textContent = tool;

        toolsContainer.appendChild(span);

    });


    /* -----------------------------------------
       GITHUB / REPOSITORY LINK
    ----------------------------------------- */

    const githubLink =
        document.getElementById("project-github");


    if (details.github) {

        githubLink.href = details.github;
        githubLink.style.display = "inline-block";

    }

    else {

        githubLink.href = "#";
        githubLink.style.display = "none";

    }

}


/* =========================================
   PROJECT FILTERS
========================================= */

function filterProjects(category) {

    const projects =
        document.querySelectorAll(".project");


    projects.forEach(function(project) {

        if (project.classList.contains(category)) {

            project.style.display = "block";

        }

        else {

            project.style.display = "none";

        }

    });

}
