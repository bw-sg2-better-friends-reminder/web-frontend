import React, { Component } from 'react';
import '../App.css';
import Friend from './Friend';

class Friends extends Component {
    render() {
        return (
            <div className="Friends">
                <h1>My Friends</h1>
                <ul>
                    {this.props.friends.map(friend => {
                        return (
                            <Friend
                            name={friend.name}
                            date={friend.date}
                            phoneNumber={friend.phoneNumber}
                            message={friend.message}
                            />
                        );
                    })}
                </ul>
            </div>
        )
    }
}

Friend.defaultProps = {
    friends: [],
};

export default Friends;
