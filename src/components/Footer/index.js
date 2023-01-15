import "./style.scss";

const Footer = () => {
  return (
    <>
    <div className={'footer-wrapper'}>
      <div className={'container'}>
        <div className={'footer-logo'}>Food <span>Villa</span></div>
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