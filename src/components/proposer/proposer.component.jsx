import './propesor.style.css'
import Pic1 from '../../sources/images/cyberpunk.jpg'
import Pic2 from '../../sources/images/godofwar.jpeg'
import Pic3 from '../../sources/images/tlou_header.jpg'
import Pic4 from '../../sources/images/tlou_header2.jpg'
import PlayIco from '../../sources/icons/play_arrow.png'
import CommentIco from '../../sources/icons/comment.png'
import ViewsIco from '../../sources/icons/views.png'
import UserIco from '../../sources/icons/user_2.png'

const Proposer = () => {
    let movies = [
        {
            id: 'ABC-123',
            length: '00:44',
            title: 'New RPG coming this summer',
            views: '2.356',
            author: 'Audrey',
            commentCounter: '1'
        },
        {
            id: 'ABC-124',
            length: '01:05',
            title: 'God Of War',
            views: '356',
            author: 'Alden',
            commentCounter: '3'
        },
        {
            id: 'ABC-125',
            length: '03:34',
            title: 'The Last Of Us Trailer',
            views: '1.011',
            author: 'Audrey',
            commentCounter: '1'
        },
        {
            id: 'ABC-126',
            length: '02:43',
            title: 'The Last Of Us Gameplay',
            views: '656',
            author: 'Alden',
            commentCounter: '0'
        },
    ];

    return (
        <div className="proposer-container">

            <div className="proposer-main">
                <div className="proposer-info-div">
                    <div className="proposer-info-time">
                        <span>
                            <p>{movies[0].length}</p>
                        </span>
                    </div>
                    <div className='proposer-info-play'>
                        <img src={PlayIco} alt="play-icon" />
                    </div>
                    <div className="proposer-info-text">
                        <p className='proposer-info-text-title'>{movies[0].title}</p>
                        <p className='proposer-info-text-details'>
                            <span>
                                <img src={UserIco} alt="user-icon" />
                                {movies[0].author}
                            </span>
                            <span>
                                <img src={ViewsIco} alt="views-icon" />
                                {movies[0].views} views
                            </span>
                            <span>
                                <img src={CommentIco} alt="comment-icon" />
                                {movies[0].commentCounter}
                            </span>
                        </p>
                    </div>
                </div>
                <img src={Pic1} alt="first-picture" />
            </div>

            <div className="proposer-side">

                <div className='proposer-side-upper'>
                    <div className="proposer-info-div">
                        <div className="proposer-info-time">
                            <span>
                                <p>{movies[1].length}</p>
                            </span>
                        </div>
                        <div className='proposer-info-play'>
                            <img src={PlayIco} alt="play-icon" />
                        </div>
                        <div className="proposer-info-text">
                            <p className='proposer-info-text-title proposer-info-text-title-small'>{movies[1].title}</p>
                            <p className='proposer-info-text-details'>
                                <span>
                                    <img src={UserIco} alt="user-icon" />
                                    {movies[1].author}
                                </span>
                                <span>
                                    <img src={ViewsIco} alt="views-icon" />
                                    {movies[1].views} views
                                </span>
                                <span>
                                    <img src={CommentIco} alt="comment-icon" />
                                    {movies[1].commentCounter}
                                </span>
                            </p>
                        </div>
                    </div>
                    <img src={Pic2} alt="second-picture" />
                </div>

                <div className='proposer-side-lower-1'>
                    <div className="proposer-info-div">
                        <div className="proposer-info-time">
                            <span>
                                <p>{movies[2].length}</p>
                            </span>
                        </div>
                        <div className='proposer-info-play'>
                            <img src={PlayIco} alt="play-icon" />
                        </div>
                        <div className="proposer-info-text">
                            <p className='proposer-info-text-title  proposer-info-text-title-small'>{movies[2].title}</p>
                            <p className='proposer-info-text-details'>
                                <span>
                                    <img src={UserIco} alt="user-icon" />
                                    {movies[2].author}
                                </span>
                                <span>
                                    <img src={ViewsIco} alt="views-icon" />
                                    {movies[2].views} views
                                </span>
                                <span>
                                    <img src={CommentIco} alt="comment-icon" />
                                    {movies[2].commentCounter}
                                </span>
                            </p>
                        </div>
                    </div>
                    <img src={Pic3} alt="third-picture" />
                </div>

                <div className='proposer-side-lower-2'>
                    <div className="proposer-info-div">
                        <div className="proposer-info-time">
                            <span>
                                <p>{movies[3].length}</p>
                            </span>
                        </div>
                        <div className='proposer-info-play'>
                            <img src={PlayIco} alt="play-icon" />
                        </div>
                        <div className="proposer-info-text">
                            <p className='proposer-info-text-title  proposer-info-text-title-small'>{movies[3].title}w</p>
                            <p className='proposer-info-text-details'>
                                <span>
                                    <img src={UserIco} alt="user-icon" />
                                    {movies[3].author}
                                </span>
                                <span>
                                    <img src={ViewsIco} alt="views-icon" />
                                    {movies[3].views} views
                                </span>
                                <span>
                                    <img src={CommentIco} alt="comment-icon" />
                                    {movies[3].commentCounter}
                                </span>
                            </p>
                        </div>
                    </div>
                    <img src={Pic4} alt="fourth-picture" />
                </div>

            </div>
        </div>
    );
}

export default Proposer