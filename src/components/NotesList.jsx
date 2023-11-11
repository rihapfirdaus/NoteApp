import React from "react";
import NoteItem from "./NoteItem";
  
function NotesList({notes, onDelete, onAction}) {
    return (
        notes.length === 0 ? (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
            <div className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem 
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onAction={onAction}
                            {...note}
                        />
                    ))
                }
            </div>
        )
    );
  }
   
  export default NotesList;