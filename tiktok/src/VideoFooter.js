import { MusicNote } from '@material-ui/icons';
import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';


function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooterText">
                <h3 className="channel">@{channel}</h3>
                <p className="lead">{description}</p>
                <div className="videoFooterTicker">
                    <MusicNoteIcon
                        className="videoFooterIcon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
         
        </div>
    )
}

export default VideoFooter
