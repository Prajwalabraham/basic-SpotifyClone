import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi({
// credentials are optional
  clientId: '4cf8640d40a14c478c1acccb8fe49dc2',
  clientSecret: 'b69c720c4ee9486d9ccf8d5cd5b407c7',
  redirectUri: 'http://localhost:3000/'
});

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
  if(_token){

    dispatch({
      type:'SET_TOKEN',
      token: _token,
    });


    spotify.setAccessToken(_token); 

    spotify.getMe().then(user => {
      
    dispatch({
      type: 'SET_USER',
      user: user,
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
      })
    })

    spotify.getPlaylist('37i9dQZF1EuJMwX0XS9xXz').then(response => 
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      })
    )
    spotify.searchTracks('Worship').then(response => 
      dispatch({
        type: 'SET_SEARCH',
        SearchData: response,
      })
    );

  }
//hi
  }, []);

  return (
    <div className="app">{token ? <Player spotify={spotify}/> : (<Login />)}</div>
  );
}

export default App;
