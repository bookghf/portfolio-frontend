import React,{useState} from 'react'
import '../css/header.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
const Header = ({ resultRefHome, resultRefAbout, resultRefProject, resultRefContact }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {setMobileMenu(!mobileMenu)}
    const homeClick = () =>{
        resultRefHome.current.scrollIntoView({ behavior: "smooth" });
    }
    const aboutClick = () =>{
        resultRefAbout.current.scrollIntoView({ behavior: "smooth" });
    }
    const projectClick = () =>{
        resultRefProject.current.scrollIntoView({ behavior: "smooth" });
    }
    const contactClick = () =>{
        resultRefContact.current.scrollIntoView({ behavior: "smooth" });
    }
    
    return (
        <div className='header'>
            <div className='header_wrap'>
                <a href='/' >
                    <div className='logo container'>
                        <img src='/bookghf.png' alt=''/>
                        <p>Bookghf</p>
                    </div>
                </a>
                <ul className='menu_list container'>
                    <li className='menu'>
                        <p onClick={()=>{homeClick()}}>Home</p>
                    </li>
                    <li className='menu'>
                        <p onClick={()=>{aboutClick()}}>About me</p>
                    </li>
                    <li className='menu'>
                        <p onClick={()=>{projectClick()}}>Project</p>
                    </li>
                    <li className='menu'>
                        <p onClick={()=>{contactClick()}}>Contact</p>
                    </li>
                </ul>
                <div className='mobile_menus'>
                    <div className='menu_mobile' style={(mobileMenu)?({display:"none"}):({display:"block"})} onClick={()=>{toggleMenu()}}><GiHamburgerMenu/></div>
                    <div className='menu_mobile_list' style={(mobileMenu)?({color:"white"}):({display:"none"})}>
                        <div className='menu_mobile'><GrClose onClick={()=>{toggleMenu()}}/></div>
                        <div className='menu_mobile'><p onClick={()=>{homeClick()}}>Home</p></div>
                        <div className='menu_mobile'><p onClick={()=>{aboutClick()}}>About me</p></div>
                        <div className='menu_mobile'><p onClick={()=>{projectClick()}}>Project</p></div>
                        <div className='menu_mobile'><p onClick={()=>{contactClick()}}>Contact</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header