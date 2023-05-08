import './navigation.style.css'
import triangleIco from '../../sources/icons/triangle-ico.png'
import searchIco from '../../sources/icons/search.png'
import cartIco from '../../sources/icons/cart.png'
import userIco from '../../sources/icons/user.png'
import nightIco from '../../sources/icons/night.png'


const Navigation = () => {
    return (
        <div className='container'>

            <div className="left-section">
                <img src={triangleIco} alt="triangle-ico" />
                <p>streamtube</p>
            </div>

            <div className="center-section">
                <select className='select' name="cars" id="cars">
                    <option value="all">All</option>
                    <option value="video">Videos</option>
                    <option value="post">Posts</option>
                    <option value="product">Products</option>
                    <option value="collection">Collections</option>
                    <option value="user">Users</option>
                </select>
                <input type="text" name="searchInput" id="searchInput" />
                <button className="search-btn">
                    <img src={searchIco} alt="search-icon" />
                </button>
            </div>
            <div className="right-section">
                <div className="cart">
                    <img src={cartIco} alt="cart-icon" />
                    <div className="cart-counter">0</div>
                </div>
                <button className="sign-in">
                    <img src={userIco} alt="user-icon" />
                    <p>Sign In</p>
                </button>
                <img className='night-ico' src={nightIco} alt="night-icon" />
            </div>
        </div>
    );
}

export default Navigation 