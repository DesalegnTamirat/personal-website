const Contact = () => {
  return (
    <section id="contact-section">
      <h2>My Contacts</h2>
      <hr className="small"/>
      <div className="contact-details">
        <div className="contact">
          <div className="icon"><ion-icon name="call-outline"></ion-icon></div>
          <h3>Telephone</h3>
          <a href="#">
            Call me
          </a>
        </div>
        <div className="contact">
          <div className="icon">
          <ion-icon name="mail-outline"></ion-icon>
          </div>
          <h3>Email</h3>
          <a href="#">
            Email me
          </a>
        </div>
        <div className="contact">
          <div className="icon">
          <ion-icon name="logo-github"></ion-icon>
          </div>
          <h3>Git</h3>
          <a href="#">
            Git me
          </a>
        </div>
        <div className="contact">
          <div className="icon">
          <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <h3>Linkdin</h3>
          <a href="#">
            Link me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
