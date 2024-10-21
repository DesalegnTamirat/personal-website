import profilePicture from "../images/profile-picture.png";
import layer1 from "../images/layer-1.png";
import layer2 from "../images/layer-2.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Desalegn Tamirat</h2>
        <p>Passionate Front End developer</p>
        <div className="cta-btns">
        <a href="#cta-section" className="btn cta-btn">Hire me
        </a>
        <a href="#contact-section" className="btn overlay-btn"><span></span>Have a chat <ion-icon name="chatbubbles-outline"></ion-icon></a>
        </div>
      </div>

      <div className="hero-image">
        <img src={layer1} alt="" className="layer1" />
        <img src={profilePicture} alt="A boy wearing suite" className="profile-picture"/>
        <img src={layer2} alt="" className="layer2" />
      </div>
    </section>
  );
};

export default Hero;
