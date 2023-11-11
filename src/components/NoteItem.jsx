import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({id, title, createdAt, body, archived, onDelete, onAction}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemTitle title={title} createdAt={createdAt}/>
                <NoteItemBody body={body}/>
            </div>
            <div className="note-item__action">
                <NoteItemAction
                    id={id} 
                    onDelete={onDelete} 
                    onAction={onAction}
                    isArchived={archived}
                    />
            </div>
        </div>
    );
}

export default NoteItem;