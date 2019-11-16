import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        { title: 'Bleak', duration: '3:45' },
        { title: 'Don\'t Speak', duration: '4:05'},
        { title: 'We Are The Champions', duration: '5:05'},
        { title: 'Bohemian Rhapsody', duration: '3:30'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});