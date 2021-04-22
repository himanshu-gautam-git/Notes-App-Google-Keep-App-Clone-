import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>
{
    const [expand,setExpand]=useState(false);

    const [note,setNote]=useState({
        title: "",
        content: "",
    });
    const InputEvent = (event) =>
    {
        const {name,value}=event.target;
        
        setNote((oldData) => {

            return{
                ...oldData,
                [name]:value,
            };
        });
    }
    const addEvent=()=>{
        if(note.title!=="" && note.content!=="")
        {
         props.passNote(note);
         setNote({
            title: "",
            content: "",
        });
        }
        else if(note.title==="")
          alert("Title should not be empty");
        else
          alert("Note should not be empty");
    };

    const expandIt=()=>{
      setExpand(true);
    };
    const shrinkIt=()=>{
        setExpand(false);
      };
    return(
        <>
          <div className="main_note" onDoubleClick={shrinkIt}> 
             <form>
                 {expand?
                 <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
                 :null
                 }

                 <textarea rows="" columns="" name="content"  value={note.content} onChange={InputEvent} onClick={expandIt}  placeholder="Write a note..."/>
                 
                 {expand?
                 <IconButton className="mbtn" onClick={addEvent}>
                      <AddIcon className="plus_sign"/>
                 </IconButton>
                 :null}
             </form>
          </div>
        </>
    );
}

export default CreateNote;