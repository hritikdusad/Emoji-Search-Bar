import React from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import EmojiResultRow from "./EmojiResultRow";


export default class EmojiResult extends React.Component{

    static propTypes = {
        emojiData:PropTypes.array
    };

    componentDidMount(){
        this.clipboard = new Clipboard(".copy-to-clipboard");
    }

    componentWillMount(){
        if(this.clipboard != null){
            this.clipboard.destroy();
        }
        
    }

    render(){
        return(
            <div className="component-emoji-search">
                {this.props.emojiData.map(emojiData =>(
                    <EmojiResultRow
                        key ={emojiData.title}
                        symbol = {emojiData.symbol}
                        title = {emojiData.title}
                    />
                ))}
            </div>
        );
    }
}