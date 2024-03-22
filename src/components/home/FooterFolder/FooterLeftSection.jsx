import Icon1 from '../../../assets/footer/icons/icon-1.png'
import Icon2 from '../../../assets/footer/icons/icon-2.png'
import Icon3 from '../../../assets/footer/icons/icon-3.png'
import Logo from '../../../assets/footer/logo-footer.svg'

const FooterLeftSection = () => {
  return (
    <div className="left-section">
      <h6>
        <img src={Logo} />
      </h6>
      <address className="left-section-items">
        <img src={Icon1} />
        341 Londnderry Road, <br />
        Istanbul Türkiye
      </address>

      <p className="left-section-items">
      <img src={Icon2} />
        Email:{" "}
        <a href="mailto:aciktim@teknolojikyemekler.com">
          aciktim@teknolojikyemekler.com
        </a>
      </p>

      <p className="left-section-items"><img src={Icon3} />Telephone: +90 216 123 45 67</p>
    </div>
  );
};

export default FooterLeftSection;
