import React from 'react';

class FilterButton extends React.Component{

    render(){
        return (
            <div className="filter-button" onClick={(e) => this.props.toggleFilter(e)}>Filter</div>
        );
    }
}

export default FilterButton;