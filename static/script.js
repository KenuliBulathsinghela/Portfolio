

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
        subtitle: "Turning financial data into actionable performance insights",
        description:
            "An interactive Power BI dashboard developed to analyze revenue, expenses, profitability, and key financial performance indicators. The dashboard transforms financial data into visual insights for easier performance monitoring and data-driven decision-making.",

        analysisTitle: "Key Analysis",
        analysis: [
            "Analyzed revenue and expense trends",
            "Evaluated profitability and financial KPIs",
            "Compared financial performance across different business dimensions",
            "Created interactive visualizations for KPI monitoring and performance analysis"
        ],
        tools: [
            "Power BI",
            "Excel",
            "SQL"
        ],
        evidence:
            "Interactive dashboard showcasing financial KPIs, revenue, expenses, and profitability analysis.",
        github:
            "https://github.com/KenuliBulathsinghela/Business-Intelligence-Projects"
    },

    churn: {
        title: "Customer Churn Prediction",
        image: "/static/images/churn.png",
        subtitle: "Using machine learning to identify customers at risk of churn",
        description:
            "A machine learning project developed to analyze customer behavior and predict the likelihood of customers leaving a service. The project applies data preprocessing, exploratory analysis, and predictive modeling to identify factors associated with customer churn.",
        analysisTitle: "Key Analysis",
        analysis: [
            "Explored customer characteristics and behavioral patterns",
            "Performed data cleaning and exploratory data analysis",
            "Identified factors associated with customer churn",
            "Developed a predictive model to classify potential churn customers",
            "Evaluated model performance using classification metrics"
        ],
        tools: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Machine Learning"
        ],
        evidence:
            "Model and visualization evidence demonstrating customer churn analysis and prediction.",
        github:
            "https://github.com/KenuliBulathsinghela/Data-Analytics-Portfolio-Python/tree/main/Telecom%20Customer%20Churn%20Prediction"
    },

    sales: {
        title: "Sales Data Analysis",
        image: "/static/images/sales.png",
        subtitle: "Turning sales data into business insights",
        description:
            "A data analysis project focused on exploring sales performance, identifying trends, and extracting insights from transactional data. The analysis uses data visualization and exploratory techniques to understand sales patterns and business performance.",
        analysisTitle: "Key Analysis",
        analysis: [
            "Analyzed sales and revenue patterns",
            "Explored product and sales performance",
            "Identified trends and variations within the dataset",
            "Created visualizations to communicate key findings",
            "Derived insights to support data-driven decisions"
        ],
        tools: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Data Visualization"
        ],
        evidence:
            "Visual analysis presenting sales trends, patterns, and key business insights.",
        github:
            "https://github.com/KenuliBulathsinghela/Data-Analytics-Portfolio-Python/tree/main/Sales%20Forecasting%20Model"
    },

    clinic: {
        title: "Eye Clinic Appointment System",
        image: "/static/images/clinic.jpg",
        subtitle: "A digital appointment and management solution for an eye-care business",
        description:
            "A software solution developed to support the digital management of eye-clinic operations, including appointments, patient information, and related business processes.",
        analysisTitle: "Key Features",
        analysis: [
            "Online appointment management",
            "Patient information management",
            "Staff and administrative functionality",
            "Online payment and glasses/product ordering",
            "Database-driven clinic management"
        ],
        tools: [
            "C#",
            "SQL",
            "PHP",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        evidence:
            "Application interface demonstrating the clinic's appointment and management functionality.",
        github:
            "https://github.com/KenuliBulathsinghela/EyeClinic"
    },

    rentmate: {
        title: "RentMate Smart Rental System",
        images: [
            "/static/images/rentmate1.png",
            "/static/images/rentmate2.png"
        ],
        subtitle: "A smart platform for finding and managing rental accommodation",
        description:
            "A smart rental and boarding management system designed to connect tenants and property owners while providing personalized recommendations and supporting rental-related activities.",
        analysisTitle: "Key Features",
        analysis: [
            "User registration and authentication",
            "Personalized property recommendations",
            "Smart roommate matching based on personality",
            "Location-based transport information",
            "Rental payment and reminder functionality",
            "Property owner verification",
            "Maintenance request management"
        ],
        tools: [
            "Flutter",
            "Dart",
            "Firebase"
        ],
        evidence:
            "Application screens demonstrating property discovery, recommendations, and rental management functionality.",
        github:
            "https://github.com/KenuliBulathsinghela/RentMate"
    },

    game: {
        title: "Game Recommender System",
        image: "/static/images/game.png",
        subtitle: "Personalized game recommendations using machine learning",
        description:
            "A recommendation system developed to generate personalized game suggestions based on user and game data. The project explores recommendation techniques and evaluates the quality of generated recommendations.",
        analysisTitle: "Key Features",
        analysis: [
            "Processed and analyzed game-related datasets",
            "Applied data preprocessing techniques",
            "Developed a recommendation model",
            "Generated personalized game recommendations",
            "Evaluated recommendations using Precision@K"
        ],
        tools: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "Streamlit"
        ],
        evidence:
            "Interactive Streamlit interface demonstrating personalized game recommendations.",
        github:
            "https://github.com/KenuliBulathsinghela/game-recommender-system"
    },

    agile: {
        title: "Agile Project Management",
        image: "/static/images/agile.png",
        subtitle: "Applying Agile practices to plan and manage a software project",
        description:
             "A simulated Agile project demonstrating how software requirements can be organized, prioritized, and managed throughout a project lifecycle.",
        analysisTitle: "Key Activities",
        analysis: [
            "Created project epics and user stories",
            "Organized and prioritized the product backlog",
            "Developed requirements and supporting documentation",
            "Created wireframes to communicate proposed functionality",
            "Applied Agile project-management practices"
        ],
        tools: [
            "Jira",
            "Agile",
            "Scrum",
            "User Stories",
            "Wireframing"
        ],
        evidence:
            "Jira board, user stories, wireframes, and project documentation demonstrating Agile project management practices.",
        github:
            "https://github.com/KenuliBulathsinghela/Agile-Project-Management-Simulation-Jira_Project"
    },

    team: {
        title: "Cross-functional Team Leadership",
        image: "/static/images/team.png",
        subtitle: "Coordinating people, tasks, and technical work toward a shared outcome",
        description:
            "A project experience demonstrating team leadership, coordination, task organization, and collaboration across different areas of a software project.",

        analysisTitle: "Key Contributions",
        analysis: [
            "Coordinated tasks across team members",
            "Supported project planning and task allocation",
            "Monitored project progress and deadlines",
            "Facilitated communication within the team",
            "Contributed to technical development and problem-solving",
            "Supported the delivery of project outcomes"
        ],
        tools: [
            "Team Leadership",
            "Project Coordination",
            "Communication",
            "Task Management",
            "Problem Solving"
        ],
        evidence:
            "Project artifacts demonstrating team coordination, planning, and collaborative delivery.",
        github:
            "https://github.com/KenuliBulathsinghela/ClothingStore"
    },

    document: {
        title: "Technical Documentation",
        image: "/static/images/documentation.png",
        subtitle: "Turning technical requirements into clear, structured documentation",
        description:
            "A documentation-focused project demonstrating the ability to translate technical and business requirements into structured documentation that supports development and project delivery.",
        analysisTitle: "Key Deliverables",
        analysis: [
            "Business and functional requirements",
            "Structured project documentation",
            "User stories and requirement descriptions",
            "Data dictionaries and supporting documentation",
            "Process and system documentation",
            "Documentation supporting stakeholder and development communication"
        ],
        tools: [
            "Requirements Documentation",
            "BRD",
            "User Stories",
            "Process Documentation",
            "Technical Writing",
            "Business Analysis"
        ],
        evidence:
            "Selected documentation artifacts demonstrating requirements analysis and structured technical communication.",
        github:
            "https://drive.google.com/file/d/1Qo4JJdVmjIJQdZTcJveVaOyAvtnxpqnE/view?usp=sharing"
    }
};


// =========================================
// SHOW PROJECT DETAILS
// =========================================

function showProject(projectName) {

    const details = projectDetails[projectName];

    if (!details) {
        console.error("Project not found:", projectName);
        return;
    }

    // Images
    const imageContainer =
        document.getElementById("project-images");

    imageContainer.innerHTML = "";

    if (details.images && Array.isArray(details.images)) {

        details.images.forEach(function(imagePath) {

            const img = document.createElement("img");

            img.src = imagePath;
            img.alt = details.title;

            imageContainer.appendChild(img);

        });

    } else if (details.image) {

        const img = document.createElement("img");

        img.id = "project-image";
        img.src = details.image;
        img.alt = details.title;

        imageContainer.appendChild(img);

    }


    // Title
    document.getElementById("project-title").textContent =
        details.title;


    // Subtitle
    document.getElementById("project-subtitle").textContent =
        details.subtitle;


    // Description
    document.getElementById("project-description").textContent =
        details.description;


    // Analysis / Features
    const analysisTitle =
        document.getElementById("project-analysis-title");

    const analysisList =
        document.getElementById("project-analysis-list");

    const analysisSection =
        document.getElementById("project-analysis");


    analysisList.innerHTML = "";


    if (details.analysisTitle) {

        analysisTitle.textContent =
            details.analysisTitle;

    }


    if (
        details.analysis &&
        Array.isArray(details.analysis) &&
        details.analysis.length > 0
    ) {

        details.analysis.forEach(function(item) {

            const li = document.createElement("li");

            li.textContent = item;

            analysisList.appendChild(li);

        });

        analysisSection.style.display = "block";

    } else {

        analysisSection.style.display = "none";

    }


    // Tools
    const toolsContainer =
        document.getElementById("project-tools");

    toolsContainer.innerHTML = "";


    if (details.tools && Array.isArray(details.tools)) {

        details.tools.forEach(function(tool) {

            const span = document.createElement("span");

            span.textContent = tool;

            span.classList.add("tool-tag");

            toolsContainer.appendChild(span);

        });

    }


    // Evidence
    const evidence =
        document.getElementById("project-evidence");


    if (details.evidence) {

        evidence.textContent =
            details.evidence;

    } else {

        evidence.textContent =
            "Project evidence available in the project repository.";

    }


    // GitHub / Repository
    const githubLink =
        document.getElementById("project-github");


    if (details.github) {

        githubLink.href =
            details.github;

        githubLink.style.display =
            "inline-block";

    } else {

        githubLink.href = "#";

        githubLink.style.display =
            "none";

    }

}


// =========================================
// PROJECT FILTERS
// =========================================

function filterProjects(category) {

    const projects =
        document.querySelectorAll(".project");


    projects.forEach(function(project) {

        if (project.classList.contains(category)) {

            project.style.display = "block";

        } else {

            project.style.display = "none";

        }

    });

}

/* ========================================= 
   EDUCATION SCROLL ANIMATION 
========================================= */ 
 
document.addEventListener("DOMContentLoaded", () => { 
 
    const lines = [ 
        document.getElementById("line1"), 
        document.getElementById("line2"), 
        document.getElementById("line3") 
    ]; 
 
    const boxes = [ 
        document.getElementById("box1"), 
        document.getElementById("box2"), 
        document.getElementById("box3"), 
        document.getElementById("box4") 
    ]; 

    const educationScrollStart = 0.85;
    const educationScrollEnd = 0.15;
    const educationSmoothing = 0.08;
    const boxGlowDelay = 350;
    let targetProgress = 0;
    let renderedProgress = 0;
    let animationFrame = null;
    let activeBoxIndex = -1;
    let boxGlowTimer = null;
 
 
    /* =========================================
       PREPARE SVG LINES
    ========================================= */ 
 
    lines.forEach(line => { 
 
        const length = line.getTotalLength(); 
 
        line.style.strokeDasharray = length; 
        line.style.strokeDashoffset = length; 
 
        line.dataset.length = length; 
 
    }); 
 
 
    /* =========================================
       UPDATE ANIMATION
    ========================================= */ 
 
    function renderEducationAnimation(progress) {
 
        const section = document.querySelector(".education-section"); 
 
        const rect = section.getBoundingClientRect(); 
 
        const windowHeight = window.innerHeight; 
 
 
        const startPoint = windowHeight * educationScrollStart;
        const endPoint = windowHeight * educationScrollEnd;
 
        progress = 
            (startPoint - rect.top) / 
            (startPoint - endPoint); 
 
 
        progress = Math.max( 
            0, 
            Math.min(1, progress) 
        ); 
 
 
        /* =========================================
           DIVIDE INTO 3 ANIMATION STAGES
        ========================================= */ 
 
        const stageSize = 1 / 3; 
 
 
        lines.forEach((line, index) => { 
 
            const start = index * stageSize; 
            const end = (index + 1) * stageSize; 
 
            let lineProgress = 
                (progress - start) / 
                (end - start); 
 
            lineProgress = Math.max( 
                0, 
                Math.min(1, lineProgress) 
            ); 
 
            const length = 
                Number(line.dataset.length); 
 
 
            /*
             * Grey → Neon Green
             */
 
            line.style.strokeDashoffset = 
                length * (1 - lineProgress); 
 
 
            /*
             * Add glow when animation starts
             */
 
            if (lineProgress > 0) { 
 
                line.classList.add("active"); 
 
            } else { 
 
                line.classList.remove("active"); 
 
            } 
 
        }); 
 
 
        /* =========================================
           BOX ACTIVE STATES
        ========================================= */ 
 
        const nextBoxIndex = progress < 0.10
            ? 0
            : progress < 0.40
                ? 1
                : progress < 0.75
                    ? 2
                    : 3;

        if (nextBoxIndex !== activeBoxIndex) {
            activeBoxIndex = nextBoxIndex;
            boxes.forEach(box => box.classList.remove("active"));
            clearTimeout(boxGlowTimer);
            boxGlowTimer = setTimeout(() => {
                boxes[activeBoxIndex].classList.add("active");
            }, boxGlowDelay);
        }
 
    }

    function animateEducation() {
        renderedProgress +=
            (targetProgress - renderedProgress) * educationSmoothing;

        renderEducationAnimation(renderedProgress);

        if (Math.abs(targetProgress - renderedProgress) > 0.001) {
            animationFrame = requestAnimationFrame(animateEducation);
        } else {
            renderedProgress = targetProgress;
            renderEducationAnimation(renderedProgress);
            animationFrame = null;
        }
    }

    function updateEducationAnimation() {
        const section = document.querySelector(".education-section");
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startPoint = windowHeight * educationScrollStart;
        const endPoint = windowHeight * educationScrollEnd;

        targetProgress = Math.max(
            0,
            Math.min(1, (startPoint - rect.top) / (startPoint - endPoint))
        );

        if (animationFrame === null) {
            animationFrame = requestAnimationFrame(animateEducation);
        }
    }
 
 
    /* =========================================
       SCROLL EVENT
    ========================================= */ 
 
    window.addEventListener( 
        "scroll", 
        updateEducationAnimation, 
        { passive: true } 
    ); 
 
 
    /* =========================================
       INITIAL LOAD
    ========================================= */ 
 
    updateEducationAnimation(); 
 
});