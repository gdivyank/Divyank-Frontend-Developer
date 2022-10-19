import React from "react";
import VideoPlayer from 'react-background-video-player';
import Typed from "react-typed"
import backgroundVideo from '../assets/bgvideo.mp4'
import { isMobile } from '../utils/index'

function Podium() {

    const isMobileDevice = isMobile()
	return (
        <div className="banner">
			<VideoPlayer
                src={backgroundVideo}
                style={{ top: 60, height: '80%', width: '100%' }}
            />
			<div className="greyTransparent">
                <div className="typedWrapper">
                    <Typed
                        strings={[
                            "Where future is beyond the horizons",
                            "Innovate, Ideate and Implement",
                            "Vision for the next generation is here",
                        ]}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                        className="typedStyle"
                    />
                </div>

			</div>

		
      
		</div>
	);
}

export default Podium;
