const Contact = () => {
  return (
    <section id="about-section">
      <div className="container">
        <h2>About Me</h2>
        <hr className="big"/>
        <div className="about-content">
          <div className="about-text">
            <h3>Hi, I’m Desalegn Tamirat</h3>
            <p>
              I am a passionate full-stack developer from Addis Ababa, Ethiopia,
              with a degree in Electrical and Computer Engineering from Addis
              Ababa University.
            
              My journey in technology began during my early years at university,
              and I am committed to building innovative web solutions that connect
              people and enhance user experiences.
            
              When I am not coding, you can find me volunteering to teach
              programming or helping others learn data structures and algorithms.
            </p>
            <a href="#contact" className="btn cta-btn">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
