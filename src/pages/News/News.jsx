import React from "react";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import "./News.css"
import MessageList from "./MessageList/MessageList";



class News extends React.Component {
   state = {
        messages: [
            {
                title: "test",
                text:"asdasdasd",
                approved: false,
            }
        ]
   };

    sendMessage(tittle , message) {
        const post = {
            tittle,
            message
        };
        console.log(post);

        this.setState( { messages: [...this.state.messages , post]} )
    }

    render () {
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <SendMessageForm sendMessage={this.sendMessage} />
            </div>


        )
    }
}

export default News