import React from "react";
import { showFormattedDate } from "../utils/data";

function NoteItemTitle({title, createdAt}) {
    const formattedDate = showFormattedDate(createdAt);
    return (
        <>
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{formattedDate}</p>
        </>
    );
}

export default NoteItemTitle;