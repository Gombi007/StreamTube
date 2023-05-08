import './propesor.style.css'
import Pic1 from '../../sources/images/cyberpunk.jpg'
import Pic2 from '../../sources/images/godofwar.jpeg'
import Pic3 from '../../sources/images/tlou_header.jpg'
import Pic4 from '../../sources/images/tlou_header2.jpg'

const Proposer = () => {
    return (
        <div className="proposer-container">
            <div className="proposer-main">
                <img src={Pic1} alt="first-picture" />
            </div>
            <div className="proposer-side">
                <div className='proposer-side-upper'>
                    <img src={Pic2} alt="second-picture" />
                </div>
                <div className='proposer-side-lower-1'>
                    <img src={Pic3} alt="third-picture" />
                </div>
                <div className='proposer-side-lower-2'>
                    <img src={Pic4} alt="fourth-picture" />
                </div>

            </div>
        </div>
    );
}

export default Proposer