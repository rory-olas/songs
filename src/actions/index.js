//reminder - this is an action creator, it must return an Action
//which is a javascript object with the properties type and payload
//We assume that we are going to pass in the song that we are trying to select as an argument to this function,
//so we put song in the parentheses.

export const SelectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song,
    };
};

