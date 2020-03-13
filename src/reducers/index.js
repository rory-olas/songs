import {combineReducers} from "redux";



//This is our list of songs. All hard-coded into the SongReducer

const SongReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4.05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want It That A Way', duration: '1:45'},
    ];
};

//this is the reducer for a specific selected song.

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: SongReducer,
    selectedSong: selectedSongReducer,
});

