import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
/* import Button from "@material-ui/core/Button"; */

const IndividualNote = (props) => {
  let deleteNote = (event) => {
    props.deleteNote(props.id);
  };

  return (
    <>
      <div className="individual-note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
          <DeleteOutlineIcon className="deleteIcon" />
        </button>
      </div>
    </>
  );
};

export default IndividualNote;
