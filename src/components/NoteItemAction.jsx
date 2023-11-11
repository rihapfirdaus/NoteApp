import React from "react";

function NoteItemAction({id, isArchived, onDelete, onAction}){
    var buttonActionLabel;
    
    if (isArchived){
        buttonActionLabel = "Pindahkan";
    } else {
        buttonActionLabel = "Arsipkan";
    }

    return (
        <>
            <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => onAction(id)}>{buttonActionLabel}</button>
        </>
    );
}

export default NoteItemAction;