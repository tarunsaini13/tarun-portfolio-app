function Info() {
    const expDifference = new Date() - new Date("2021-12-01T00:00:00+05:30");
    const expNum = expDifference / (365 * 24 * 60 * 60 * 1000);
    return (
        <section className="info-section">
            <div className="intro-wrapper">
                <h1 className="welcome-text">Welcome</h1>
                <p className="about-me">
                Hi, I'm Satyam, a Full Stack Developer with over {expNum.toFixed(1)} years of experience based in India. I am passionate about crafting innovative web solutions and coding dynamic applications that make an impact.
                </p>
                <div className="social-media-wrapper">
                    <div>
                        <img src="src/assets/img/github.svg" alt="" />
                    </div>
                    <div>
                        <img src="src/assets/img/mail.svg" alt="mail-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Info;