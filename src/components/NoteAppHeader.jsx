import React from "react";

class NoteAppHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }

        this.onInputChangeEventHandler = this.onInputChangeEventHandler.bind(this);

    }

    onInputChangeEventHandler(event){
        const search = event.target.value;
        
        this.setState({ 
            search: search,
        });
        
        this.props.onSearch({
            search: search,
        });
    }

    render() {
        return(
            <>
                <img src="icon.svg" width="30px"/>
                <h1>Notes</h1>
                <input 
                    type="search"
                    placeholder="Cari catatan..."
                    value={this.state.search}
                    onChange={this.onInputChangeEventHandler}
                    />
            </>
        );
    }
}

export default NoteAppHeader;