import React, { useState } from 'react';
import './VideoSidebar.css';
import FavouriteIcon from "@material-ui/icons/Favorite";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, shares, messages }) {

    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (<FavouriteIcon
                    fontsize="large"
                    onClick={(e) => setLiked(false)}
                />) : (
                        <FavouriteBorderIcon
                            fontsize="large"
                            onClick={(e) => setLiked(true)} />
                    )}


                <p>{liked ? likes : likes - 1}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon fontsize="large" />
                <p>{shares}</p>
            </div>

            <img
                src="https://static.thenounproject.com/png/934821-200.png" alt=""
                className="videoFooterRecord" />
        </div>
    )
}

export default VideoSidebar
