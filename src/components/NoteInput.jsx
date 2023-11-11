import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            remainingChar: 50,
            error: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const inputText = event.target.value;
        const maxTitle = 50;
        const remainingCharacters = maxTitle - inputText.length;

        if (remainingCharacters < 0) {
            this.setState({
                error: 'Judul melebihi batas karakter.',
            });
            return;
        } else {
            this.setState({
                error: '',
            });
        }

        this.setState({
            title: inputText,
            remainingChar: remainingCharacters,
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState({
            body: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        const title = this.state.title.trim();
        const body = this.state.body.trim();

        if (title === '' && body === ''){
            this.setState({
                error: 'Judul dan isi catatan tidak boleh kosong.',
            });
            return;
        }else if (title === '') {
            this.setState({
                error: 'Judul tidak boleh kosong.',
            });
            return;
        } else if (body === '') {
            this.setState({
                error: 'Isi catatan tidak boleh kosong.',
            });
            return;
        }

        this.setState({
            error: '',
        });

        this.props.addNote({
            title: this.state.title,
            body: this.state.body,
        });

        this.setState({
            title: '',
            body: '',
            remainingChar: 50,
        });

        alert('Yeyy!! Catatan kamu berhasil dibuat');
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa karakter: {this.state.remainingChar}</p>
                <input 
                    className="note-input__title"
                    type="text" 
                    placeholder="Ini adalah judul..." 
                    value={this.state.title} 
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea 
                    className="note-input__body"
                    placeholder="Tuliskan catatanmu di sini..." 
                    value={this.state.body} 
                    onChange={this.onBodyChangeEventHandler}
                />
                <button type="submit">Buat</button>
                {this.state.error && <p className="note-input__error">{this.state.error}</p>}
            </form>
        )
    }
}

export default NoteInput;
