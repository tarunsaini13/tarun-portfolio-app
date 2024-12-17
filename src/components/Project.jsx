function Project() {
    const experiences = [
        {
            company_name: "Cubastion Consulting Pvt. Ltd.",
            location: "Gurgaon, India",
            duration: "Jun 2024 - Present",
            project_name: "SSC-Content Authoring Tool",
            position : "Full Stack Developer",
            descriptions: [
                "Implemented Keycloak and Konga for secure authentication, role-based access control, and efficient API gateway management in the SSC content authoring tool.",
                "Integrated MinIO for scalable cloud storage of multilingual content and exam-related assets, ensuring reliable and efficient data handling.",
                "Designed dynamic workflows for user roles and granular permissions, streamlining the question lifecycle from authoring to evaluation and approval.",
                "Optimized system performance and usability by enabling multilingual support, role-specific features, and secure asset management for seamless exam paper creation."
            ],
            tech_stack: [
                "Angular", "Node.js", "PostgreSQL", "Express.js", "S3", "draw.io", "Kafka", "MinIo", "KeyCloak"
            ]
        },
        {
            company_name: "Cubastion Consulting Pvt. Ltd.",
            location: "Gurgaon, India",
            duration: "July 2023 - May 2024",
            project_name: "CLST-Digital Asset Lending Platform",
            position: "Full Stack Developer",
            descriptions: [
                "Built a microservices-based digital platform using Angular And Nodejs to streamline lending and borrowing of digital assets, improving transaction tracking and liquidity management.",
                "Designed and implemented an onboarding module and backend RESTful API, increasing real-time negotiation efficiency by 25 percent through automated RFQ creation and margin calls.",
                "Integrated Copper payment API to secure loan transactions, while implementing AWS KMS for data encryption, ensuring compliance and security.",
                "Menterored junior developers, conducting code reviews and providing best practices, resulting in increase in the team’s overall coding standards.",
                "Implemented caching strategies Using Memcached and database optimization which led decrease API loading times by 30 percent, managing concurrent requests to eliminate timeouts and prevent duplicate transactions with lock mechanisms."
            ],
            tech_stack: [
                "Angular", "Node.js", "PostgreSQL", "Express.js", "S3", "AWS KMS", "Kafka"
            ]
        },
        {
            company_name: "Cubastion Consulting Pvt. Ltd.",
            location: "Gurgaon, India",
            duration: "Oct 2022 - Jun 2023",
            project_name: "Xnet-HRMS Portal",
            position : "Full Stack Developer",
            descriptions: [
                "Designed and implemented a Human Resource Management System, increasing operational efficiency by 25% through streamlined employee lifecycle and payroll processes.",
                "Automated recruitment workflows and payroll calculations, achieving annual savings of 20 lakh INR while enhancing security with Azure OAuth2 integration.",
                "Developed an internal pre-onboarding portal with RESTful API and Keycloak integration, reducing recruitment costs by 30%."
            ],
            tech_stack: [
                "Angular", "TypeScript", "HTML", "CSS", "Bootstrap 4", "Node.js", "Express.js"
            ]
        },
        // {
        //     company_name: "Tutree India Pvt Ltd",
        //     location: "India",
        //     duration: "Jul 2021 - Jan 2022",
        //     project_name: "Job Portal",
        //     position : "Front end Developer",
        //     descriptions: [
        //         "Developed a Delivery Job Portal, resulting in a 20% increase in user engagement and traffic.",
        //         "Optimized the job listing page to improve user experience and streamline job searches.",
        //         "Created responsive HTML email templates to notify users of new delivery job postings, enhancing user retention."
        //     ],
        //     tech_stack: [
        //         "JavaScript", "jQuery", "HTML", "CSS"
        //     ]
        // }
    ];

    return (
        <section>
            <div className="skill-header">
                <h1>Code : Work</h1>
            </div>
            <div className="project-wrapper">
                {
                    experiences.map((exp, ind) => (
                        <div className="card">
                            <div className="timeline pb-0">
                                <div className="location-period"><span>{exp.location ? exp.location : ""}</span> | {exp.duration}</div>
                                <div className="company-name">{exp.company_name}
                                <span className="position-title">&nbsp;({exp.position})</span>
                                </div>
                            </div>
                            <h2 className="project-title">{exp.project_name}</h2>
                            <div className="bullet-point">
                                {
                                    exp.descriptions.map((e, k) => (
                                        <li key={ind + k}> {e} </li>
                                    ))
                                }
                            </div>
                            <div className="tech-stack-used">
                                Tech Used : &nbsp;
                                {
                                    exp.tech_stack.map((s, j) => (
                                        <span key={ind + j}>{s}
                                            {j < exp.tech_stack.length - 1 ? ', ' : ''}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Project;