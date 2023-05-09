import { Link } from 'react-router-dom';
import './side-navigation.style.css';
import shopIco from '../../sources/icons/shop.png';
import homeIco from '../../sources/icons/home.png';
import leftArrowIco from '../../sources/icons/left_arrow.png';
import rightArrowIco from '../../sources/icons/right_arrow.png';
import { useRef, useState } from 'react';

const SideNavigation = () => {
    const sidenavRef = useRef(null);
    const sidenavRefImg = useRef(null);
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    }

    const collapse = () => {
        const sidenavDivRef = sidenavRef.current;
        const sidenavImgRef = sidenavRefImg.current;
        sidenavDivRef.classList.toggle('collapsed');
        sidenavDivRef.classList.contains('collapsed') ? sidenavImgRef.src = rightArrowIco : sidenavImgRef.src = leftArrowIco
    }

    return (
        <div ref={sidenavRef} className="sidenav-container">
            <button className="sidenav-link collapse" onClick={collapse}>
                <img ref={sidenavRefImg} src={leftArrowIco} alt="left-arrow-ico" />
            </button>
            <Link className={activeLink === '/' ? 'sidenav-link sidenav-link-active' : 'sidenav-link'} to='/' onClick={() => handleLinkClick('/')}>
                <img src={homeIco} alt="home-ico" />
                <p>Home</p>
            </Link>
            <Link className={activeLink === '/shop' ? 'sidenav-link sidenav-link-active' : 'sidenav-link'} to='/shop' onClick={() => handleLinkClick('/shop')}>
                <img src={shopIco} alt="cart-ico" />
                <p>Shop</p>
            </Link>
        </div>
    )
}


export default SideNavigation;