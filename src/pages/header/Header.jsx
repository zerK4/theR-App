import { useRef } from 'react'
import './Header.css'

export default function Header() {
    const navRef = useRef()
    const headerRef = useRef()
    const navHandler = ()=>{
        navRef.current.classList.toggle('mediaNav')
    }
    const scrollFunction = () => {
		if(document.body.scroll > 20 || document.documentElement.scrollTop > 20){
			document.querySelector('header').classList = 'headerMove'
		}else{
            document.querySelector('header').classList = ''
        }
	}
	window.onscroll = function(){scrollFunction()}

    return (
        <header ref={headerRef}>
            <a href="#"><div className="logo">theR</div></a>
            <nav ref={navRef}>
            <i className="fa fa-close sideBarButtons closeButton" onClick={navHandler}></i>
                <a href="#"><li className="link">Home</li></a>
                <a href="#chefid"><li className="link">Chefs</li></a>
                <a href="#eventsid"><li className="link">Events</li></a>
                <a href="#meniu"><li className="link">Menu</li></a>
                <a href="#contact"><li className="link">Contact</li></a>
                
            </nav>
                <i className="fa fa-bars sideBarButtons  openButton" onClick={navHandler}></i>
        </header>
    )
}
