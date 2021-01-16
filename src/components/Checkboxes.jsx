import React, {useState} from 'react';
import {GrSync} from "react-icons/gr";

const Checkboxes = ({checkboxes, checkboxHandler}) => {
      const [filter, setFilter] = useState(false)

      const resetFilter = () => {
        setFilter(!filter)
      }

      return (
        <section className="checkboxes">
            <h3>Filter trips</h3>
            <div className="singleCheck">
                <input
                type='checkbox' name='culturalTrip' checked={checkboxes.culturalTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Cultural Tours</label>
            </div>
            <div className="singleCheck">
            <input
                type='checkbox' name='musicTrip' checked={checkboxes.musicTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Music Tours</label>
            </div>
            <div className="singleCheck">
                <input
                type='checkbox' name='natureTrip' checked={checkboxes.natureTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Nature and Active </label>
            </div>
            <div className="singleCheck">
                <input
                type='checkbox' name='shipTrip' checked={checkboxes.shipTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Ship and Train</label>
            </div>
            <div className="singleCheck">
                <input
                type='checkbox' name='specialTrip' checked={checkboxes.specialTrip}
                onChange={(e) => checkboxHandler(e)}/>
                <label>Special Trips</label>
            </div>
            <button className="resetBtn" onClick={(e) =>resetFilter(e)}>{GrSync} Reset Filter</button>
        </section>
      );
}

export default Checkboxes
