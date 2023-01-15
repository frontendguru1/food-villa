import "./style.scss";

const Button = ({label, btnClass='', size = 'medium', type = 'default'}) => {
  return (
    <>
    <button className={`btn btn-${size} btn-${type} ${btnClass}`}>{label}</button>
    </>
  )
}

export default Button;
