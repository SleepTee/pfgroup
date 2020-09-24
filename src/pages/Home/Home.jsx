import React from "react";
import {connect} from "react-redux"


class Home extends React.Component {

    render() {

        return (
            <div>
                <h1>Привет, {/*LOGIN*/}!</h1>
            </div>
        )
    }

}

const mapStateToProps = (state) =>({
    users : state
});


export default connect(mapStateToProps,null)(Home)