import "./SuccessTitle.css";
import Logo from './../../assets/logo.svg'
const SuccessTitle = () => {
  return (
    <>
      <h2 className="success-title"><img src={Logo} alt="Logo" /></h2>
      <div className="success-title-container">
        <div className="success-subtitle">
          <h1 className="success-subtitle1">lezzetin yolda</h1>
          <h1 className="success-subtitle2">SİPARİŞ ALINDI!</h1>
        </div>
      </div>
    </>
  );
};
export default SuccessTitle;
