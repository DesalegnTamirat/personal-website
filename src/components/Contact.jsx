const Contact = () => {
  return (
    <section id="contact-section">
      <h2>My Contacts</h2>
      <hr className="small" />
      <div className="contact-details">
        <div className="contact">
          <div className="icon">
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <h3>Telephone</h3>
          <a href="tel:+251979474672">
            Call me
          </a>
        </div>

        <div className="contact">
          <div className="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <h3>Email</h3>
          <a href="mailto:desalegntamirateshetu@gmail.com">
            Email me
          </a>
        </div>

        <div className="contact">
          <div className="icon">
            <ion-icon name="logo-github"></ion-icon>
          </div>
          <h3>GitHub</h3>
          <a href="https://github.com/DesalegnTamirat" target="_blank" rel="noopener noreferrer">
            Git me
          </a>
        </div>

        <div className="contact">
          <div className="icon">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/desalegn-tamirat-19727520a/" target="_blank" rel="noopener noreferrer">
            Link me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
