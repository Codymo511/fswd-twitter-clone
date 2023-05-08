import React from "react";
import "../home.scss";
import UserHomeFeed from './feeds'

class HomePage extends React.Component {
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
                        <UserHomeFeed username={username}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;