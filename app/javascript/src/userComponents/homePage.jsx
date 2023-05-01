import React from "react";
import Feed from './feeds';
import "../home.scss";

class homePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            email: this.props.email,
        }
    }

    render() {
        const {username, email} = this.state;

        return (
            <div className="container">
                <div className="row g-0 h-100">
                    <div className="col-6 feed-inner">
                        <homePage username={username}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default homePage;