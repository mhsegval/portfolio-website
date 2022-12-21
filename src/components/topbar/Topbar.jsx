import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const Topbar = ({isOpen, handleClick}) => {
  return (
    <div className={"topbar " + (isOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Mohammed H.</a>
                <div className="itemContainer">
                    <PersonIcon className="icon"/>
                    <span>+1 (647) 410-5100</span>
                </div>
                <div className="itemContainer">
                    <EmailIcon className="icon"/>
                    <span>mohammedsegval53@gmail.com</span>
                </div>
            </div>
            <div className="right" onClick={handleClick}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    </div>
  )
}

export default Topbar