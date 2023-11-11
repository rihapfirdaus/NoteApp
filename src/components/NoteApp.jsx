import React from "react";
import { getInitialData } from '../utils/data';
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler({search}) {
        this.setState({
            search: search,
        });
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]
            }
        })
    }

    onDeleteHandler(id) {
        const updatedNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes: updatedNotes });
    }

    onArchiveHandler(id) {
        const updatedNotes = this.state.notes.map(note => {
            if (note.id == id) {
                return {
                    ...note,
                    archived: !note.archived,
                };
            }
            return note;
        });

        this.setState({ 
            notes: updatedNotes,
        });
    }

    render() {
        const showingNotes = this.state.notes.filter(
            (note) => note.title.toLowerCase().includes(this.state.search.toLowerCase())
        );
        const activeList = showingNotes.filter((note) => !note.archived);
        const archiveList = showingNotes.filter((note) => note.archived);

        return (
            <div className="note-app">
                <div className="note-app__header">
                    <NoteAppHeader onSearch={this.onSearchHandler} />
                </div>
                <div className="note-app__body">
                    <h2>Buat Catatan</h2>
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NotesList 
                        notes={activeList} 
                        onDelete={this.onDeleteHandler} 
                        onAction={this.onArchiveHandler}
                        />
                    <h2>Catatan Arsip</h2>
                    <NotesList 
                        notes={archiveList} 
                        onDelete={this.onDeleteHandler} 
                        onAction={this.onArchiveHandler}
                        />
                </div>
            </div>
        )
    }
}

export default NoteApp;