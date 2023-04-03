import './style.scss';
import VideoGame from './VideoGame';
import Presentation from './Presentation';
import RatingStar from './RatingStar';

const Card = () => {
    return <div className="container">
        <div className="videogame">
            <VideoGame/>
        </div>
        <div>
            <Presentation/>
        </div>
        <div className="rating">
            <p>Rate this game:</p>
            <RatingStar/>
        </div>
    </div>
}

export default Card