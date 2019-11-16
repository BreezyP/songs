import React from 'react';
import { selectSong } from "../actions";
import SongList from "./SongList";

const App = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <SongList/>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default App;