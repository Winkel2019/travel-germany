import React from 'react';
import {GrSync} from "react-icons/gr";

const Checkboxes = ({checkboxes,resetFilter, checkboxHandler}) => {
    const {culturalTrip, musicTrip, natureTrip, shipTrip, specialTrip} = checkboxes

    return (
        <section className="checkboxes">
            <h3>Filter trips</h3>
            <div className="boxes">
            <div className="singleCheck">
                <input
                type='checkbox' name='culturalTrip' checked={culturalTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Cultural Tours</label>
            </div>
            <div className="singleCheck">
            <input
                type='checkbox' name='musicTrip' checked={musicTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Music Tours</label>
            </div>
            <div className="singleCheck">
                <input
                type='checkbox' name='natureTrip' checked={natureTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Nature/Active </label>
            </div>
            <div className="singleCheck">
                <input
                type='checkbox' name='shipTrip' checked={shipTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Ship/Train</label>
            </div>
            <div className="singleCheck">
                <input
                type='checkbox' name='specialTrip' checked={specialTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Special Trips</label>
            </div>
            </div>
            <button className="resetBtn" onClick={(e) =>resetFilter(e)}><GrSync /> Reset Filter</button>
        </section>
    );
}

export default Checkboxes
