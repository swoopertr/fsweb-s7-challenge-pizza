
import FooterLeftSection from "./FooterLeftSection";
import FooterMiddleSection from "./FooterMiddleSection";
import FooterInstaSection from "./FooterInstaSection";
import FooterTradeMarkSection from "./FooterTradeMark";
import "./FooterStyle.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="columns">
                <FooterLeftSection />
                <div className="Middle">
                <FooterMiddleSection />
                </div>
                <FooterInstaSection />
            </div>
            <div className="tradeMark">
                <FooterTradeMarkSection />
            </div>
        </footer>
    );
};

export default Footer;
