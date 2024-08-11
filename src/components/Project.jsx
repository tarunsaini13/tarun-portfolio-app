function Project() {
    const experineces = [
        {
            company_name: "Cubastion Consulting",
            location: "Gurgaon|India",
            duration: "jan-2021 - jan 2022",
            project_name: "HRMS Portal",
            description: "Serviced based architecture where we are maintainig the complete cycle of employee.",
            tech_stack: [
                { image: "src/assets/img/angular.svg", title: "Angular 16" },
                { image: "src/assets/img/angular.svg", title: "Angular 16" },
                { image: "src/assets/img/angular.svg", title: "Angular 16" },
            ]
        }
    ]
    return (
        <section>
            <div className="skill-header">
                <h1>Code : Upskill</h1>
            </div>
            <div className="project-wrapper">
                {
                    experineces.map((exp, ind) => (
                        <div className="card">
                            <div className="timeline">
                                <div className="company-title">{exp.company_name}{exp.location ? ',' + exp.location : ""}</div>
                                <div className="time-period">{exp.duration}</div>
                            </div>
                            <h2 className="project-title">{exp.project_name}</h2>
                            <div className="bullet-point">
                                {exp.description}
                            </div>
                            <div className="tech-stack-used">
                                skills : 
                                {
                                    exp.tech_stack.map((tech, j) => (
                                        <div className="chip">
                                            <img src={tech.image} alt=".." height="25px" width="60px" />
                                            <span>{tech.title}</span>
                                        </div>
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