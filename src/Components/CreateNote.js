import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  let enterNote = (event) => {
    let { name, value } = event.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  let addingNote = () => {
    if (input.title && input.content !== "") {
      props.passNote(input);
      setInput({
        title: "",
        content: "",
      });
    } else {
      alert("Can't add empty note. Title and Content, both are required");
    }
  };

  /* Here , we are adding functionality, that if user click on Textarea, then only 
  web will show the 'Title' and 'Add Note Button' to the user
  for that we have added useState=> show & setShow
  and have added Ternary opertaor (show?show Title & Button : null) before input and button tags
  
  and on single click on textarea-> it will show Title & Button
  single click event has been added into textarea tag
  And on double click on anywhere on 'createnote' component, it will hide both  Title & Button
  double click event has been added into main parent 'div' of the component, so that if user clicks 
   anywhere on 'createnote' component, it will hide both  Title & Button
   
   
   And we are using 'showTitleAndButton'  & 'hideTitleAndButton' function to set the state of 'show'*/

  const [show, setShow] = useState(false);

  let showTitleAndButton = () => {
    setShow(true);
  };

  let hideTitleAndButton = () => {
    setShow(false);
  };

  return (
    <>
      <div className="main-note" onDoubleClick={hideTitleAndButton}>
        <form>
          {show ? (
            <input
              type="text"
              onChange={enterNote}
              name="title"
              placeholder="Enter Title..."
              value={input.title}
              autoComplete="off"
            ></input>
          ) : null}
          <textarea
            row=""
            column=""
            placeholder="Write Your Note Here..."
            onChange={enterNote}
            name="content"
            value={input.content}
            onClick={showTitleAndButton}
          ></textarea>

          {show ? (
            <Button onClick={addingNote}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
