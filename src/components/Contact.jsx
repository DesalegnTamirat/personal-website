const Contact = () => {
  const contactDetails = [
    {
      icon: "something",
      title: "telephone",
      info: "+251979474672",
    },
  ];
  return (
    <section id="contact-section">
      <h2>My Contacts</h2>
      <hr className="small"/>
      <div className="contact-details">
        <div className="contact">
          <div className="icon"><ion-icon name="call-outline"></ion-icon></div>
          <h3>Telephone</h3>
          <a href="#">
            <p>Call me</p>
          </a>
        </div>
        <div className="contact">
          <div className="icon">
          <ion-icon name="mail-outline"></ion-icon>
          </div>
          <h3>Email</h3>
          <a href="#">
            <p>Email me</p>
          </a>
        </div>
        <div className="contact">
          <div className="icon">
          <ion-icon name="logo-github"></ion-icon>
          </div>
          <h3>Git</h3>
          <a href="#">
            <p>Git me</p>
          </a>
        </div>
        <div className="contact">
          <div className="icon">
          <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <h3>Linkdin</h3>
          <a href="#">
            <p>Link me</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
