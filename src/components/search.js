import React from "react";
import PropTypes from "prop-types";
import "./search.css";







export default class Search extends React.Component{

    static propTypes = {
        textChange:PropTypes.func
    };



    handleChange = event =>{
        this.props.textChange(event);
    };


    render(){
        return(
            <div class="search-container">
                <div>
                    <input onChange={this.handleChange} className="search-box"/>
                </div>
            </div>    
        );
    }
}