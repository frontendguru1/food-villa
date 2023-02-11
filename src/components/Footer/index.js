import "./style.scss";
import FooterLogo from "../../assets/img/food-villa-logo.svg";

const Footer = () => {
  return (
    <>
    <div className={'footer-wrapper'}>
      <div className={'container'}>
        <div className={'footer-logo'}>
          <img src={FooterLogo} alt={'Food Villa'} />
          Food Villa

        </div>
        <div className={'copyright'}>© 2023 Food Villa</div>
        <div className={'social-icons'}>
          <ul>
            <li>FB</li>
            <li>TW</li>
            <li>Insta</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;