import React from 'react';


interface IVideoProps {
    video: string;
}
const Video = ({video}: IVideoProps) => {
    return (
        <>
            <h1>Практическое видео</h1>
            <iframe width="100%" height="500" src={video} title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </>
    );
};

export default React.memo(Video);