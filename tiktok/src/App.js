import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);



  return (
    <div className="app">

      <div className="appVideos">

        {videos.map(({ url, channel, description, song, likes, shares, messages }) => (
          <Video autoplay
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}

          />
        ))}

      </div>
    </div>
  );
}

export default App;
