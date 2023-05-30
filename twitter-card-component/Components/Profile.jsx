import { useState } from "react";

export function Profile({ name='unknown', username='unknown', isFollowing = false, photo, size}) {

const [Following, setFollowing] = useState(isFollowing);

const text = Following ? 'Siguiendo': 'Seguir';

const buttonClassName = Following ? 'following': 'follow';

const handleClick = () => {
    setFollowing(!Following);
}

    return (
        <div className="profile">
            <img src={photo} alt={name} className="photo" height={size} width={size}/>
            
            <div className="names">
                <div className="text">
                    <h5 className="name">{name}</h5>
                    <h6 className="username">@{username}</h6>
                </div>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </div>

        </div>
    );
}