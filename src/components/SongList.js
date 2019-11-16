import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import {selectSong} from "../actions";

class SongList extends React.Component {

    renderList() {

        return this.props.songs.map(song => {


            return (
                <div key={song.title} className="d-flex justify-content-between mb-2">
                    <h4>{song.title}</h4>
                    <Button onClick={() => this.props.selectSong(song)} variant="contained" color="primary">
                        Button
                    </Button>
                </div>
            );

        });
    }

    render() {


        return <div>{this.renderList()}</div>

    }
}

//mapStateToProps

const mapStateToProps = (state) => {

    console.log(state);

    return { songs: state.songs };

};

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);

