import "./menu.scss"

const Menu = ({isOpen, handleClick}) => {
  return (
    <div className={"menu " + (isOpen && "active")}>
        <ul>
            <li onClick={handleClick}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={handleClick}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={handleClick}>
                <a href="#work">Projects</a>
            </li>
            <li onClick={handleClick}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={handleClick}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu