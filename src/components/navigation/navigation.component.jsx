import { Link, Outlet } from 'react-router-dom'
import './navigation.style.css'
import triangleIco from '../../sources/icons/triangle-ico.png'
import searchIco from '../../sources/icons/search.png'
import cartIco from '../../sources/icons/cart.png'
import userIco from '../../sources/icons/user.png'
import nightIco from '../../sources/icons/night.png'
import SideNavigation from '../side-navigation/side-navigation.component'


const Navigation = () => {
    return (
        <div>

            <div className='navbar-container'>
                <Link to='/' className="navbar-left-section">
                    <img src={triangleIco} alt="triangle-ico" />
                    <p>streamtube</p>
                </Link>

                <div className="navbar-center-section">
                    <select className='navbar-select' name="cars" id="cars">
                        <option value="all">All</option>
                        <option value="video">Videos</option>
                        <option value="post">Posts</option>
                        <option value="product">Products</option>
                        <option value="collection">Collections</option>
                        <option value="user">Users</option>
                    </select>
                    <input type="text" name="searchInput" id="navbar-searchInput" />
                    <button className="navbar-search-btn">
                        <img src={searchIco} alt="search-icon" />
                    </button>
                </div>
                <div className="navbar-right-section">
                    <Link to='/shop' className="navbar-cart">
                        <img src={cartIco} alt="cart-icon" />
                        <div className="navbar-cart-counter">0</div>
                    </Link>
                    <Link to='/login' className="navbar-sign-in">
                        <img src={userIco} alt="user-icon" />
                        <p>Sign In</p>
                    </Link>
                    <img className='navbar-night-ico' src={nightIco} alt="night-icon" />
                </div>
            </div>
            <div className="navbar-content">
                <SideNavigation />
                <Outlet />
            </div>
        </div>
    );
}

export default Navigation 