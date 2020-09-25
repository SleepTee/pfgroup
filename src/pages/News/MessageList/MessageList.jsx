import React from "react";
import "./MessageList.css"

class MessageList extends React.Component {


    render() {
        return (
            <div className="message-list">
                <ul className="message-post">
                    {this.props.messages.map(message=>{
                            return (
                                <li key={message.id}>
                                    <div className="message-tittle">
                                        {message.title}
                                    </div>
                                    <div className="message_text">
                                        {message.text}
                                    </div>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export default MessageList

