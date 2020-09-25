import React from "react";

class SendMessageForm  extends React.Component {

    state = {
        tittle: "",
        message: "",
    };


    handleChangeTittle = (e) => {
        this.setState({
            tittle: e.target.value });
    };

    handleChangeMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    };


        handleSubmit(e) {
            e.preventDefault();
            this.props.sendMessage(this.state.tittle , this.state.message);
            this.setState({
                message: '', tittle: ''
            })
        }

    render() {
            console.log(this.props)
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <div>
                <input
                    onChange={this.handleChangeTittle}
                    value={this.state.tittle}
                    placeholder="Тема поста:"
                    type="text" />
                </div>
                <div>
                <input
                    onChange={this.handleChangeMessage}
                    value={this.state.message}
                    placeholder="Введите свое сообщение"
                    type="textarea" />
                </div>
                <button type="submit">Отправить пост</button>
            </form>
        )
    }

}

export default SendMessageForm
