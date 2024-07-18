function Info(){
    return (
        <>
            <section className="info-section">
                <div className="info-wrapper">
                    <div className="intro-wrapper">
                        <h1 className="name">
                            Satyam Singh
                        </h1>
                        <span>
                            Full Stack Developer
                        </span>
                        <div className="social-media-wrapper">
                            <div>
                                <img src="src/assets/github.svg" alt=""/>
                            </div>
                            <div>
                                <img src="src/assets/mail.svg" alt="mail-image"/>
                            </div>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src="src/assets/profile-image.jpg" alt="satyam-image" width="200px" height="200px"/>
                    </div>
                </div>
                <div className="about-me">
                    <p>
                        Hey,I'm Satyam. I'm a full stack developer based in India since 2022. I also love to code and contribute to my skills.
                    </p>
                </div>
            </section>
        </>
    )
}
export default Info;