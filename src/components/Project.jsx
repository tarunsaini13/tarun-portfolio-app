function Project() {
    const experineces = [
        {
            company_name: "Cubastion Consulting",
            location: "Gurgaon,India",
            duration: "jan-2021 - jan 2022",
            descriptions : [
                "Built a microservices driven digital platform that simplifies the lending and borrowing of digital assets for institutions, improves tracking of financial transactions, and manages digital asset liquidity",
                "Developed an onboarding module and backend RESTful API for seamless RFQ creation, onboarding institution, enhancing real-time bidding for RFQ",
                "Integrated Copper third-party payment Gateway for loan fee payment",
                "Implemented AWS Key Management Service (KMS) encryption and decryption",
                "Reduced loan listing API loading time by 30%, managed concurrent requests to prevent timeouts and and eliminated multiple transaction histories using lock mechanisms."
            ],
            tech_stack: [
                "Angular16","Node.js", "PostgresSQL", "Express.js", "HTML", "CSS", "Kafka"
            ]
        },
        {
            company_name: "Cubastion Consulting",
            location: "Gurgaon,India",
            duration: "jan-2021 - jan 2022",
            descriptions : [
                "this is first point lorem23",
                "this is second point",
                "this is third point"
            ],
            tech_stack: [
                "Angular 16",
                "Angular 16",
                "Angular 16",
            ]
        },
        {
            company_name: "Cubastion Consulting",
            location: "Gurgaon,India",
            duration: "jan-2021 - jan 2022",
            project_name: "HRMS Portal",
            descriptions : [
                "this is first point lorem23",
                "this is second point",
                "this is third point"
            ],
            tech_stack: [
                "Angular 16",
                "Angular 16",
                "Angular 16",
            ]
        }
    ]
    return (
        <section>
            <div className="skill-header">
                <h1>Code : Work</h1>
            </div>
            <div className="project-wrapper">
                {
                    experineces.map((exp, ind) => (
                        <div className="card">
                            <div className="timeline">
                                <div className="location-period"><span>{exp.location ? exp.location : ""}</span> | {exp.duration}</div>
                                <div className="company-name">{exp.company_name}</div>
                            </div>
                            <span className="position-title">Full Stack Developer </span>
                            {/* <h2 className="project-title">{exp.project_name}</h2> */}
                            <div className="bullet-point">
                                {
                                    exp.descriptions.map((e,k)=>(
                                        <li key={ind+k}> {e} </li>
                                    ))
                                }
                            </div>
                            <div className="tech-stack-used">
                                Tech Used : &nbsp;
                                {
                                    exp.tech_stack.map((s, j) => (
                                        <span key={ind+j}>{s}
                                        {j < exp.tech_stack.length-1 ? ', ' : '' }
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