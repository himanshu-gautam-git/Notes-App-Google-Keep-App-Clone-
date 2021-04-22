import React from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const Header = () =>
{
    return(
        <>
          <div className="header">
           <NoteAddIcon style={{height:"50px", width:"70px"}}/>
           <h1>Notes</h1>
          </div>
        </>
    );
}

export default Header;