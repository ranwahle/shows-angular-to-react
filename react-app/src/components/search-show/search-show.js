import React from 'react';
import './search-show.scss';



class SearchShow extends React.Component {

    submitForm = (event) => {
        if (!this.props.onSearch) {
            throw Error('No onSearch callback is defined')
        }
        this.props.onSearch(this.searchTerm);
        event.preventDefault();
    }

    changeValue = (event) => {
        this.searchTerm =event.target.value;
    }

    render() {
        this.searchTerm = this.props.searchTerm;

        return (<form onSubmit={this.submitForm}>
            <div>
                <input name="search-term" type="text" placeholder="Search term" defaultValue={this.searchTerm} onChange={this.changeValue}/>
                <i className="fas fa-search" onClick={this.submitForm}></i>
            </div>
        </form>)
    }
}

export default SearchShow;
