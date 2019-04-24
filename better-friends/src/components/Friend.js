import React from 'react';

const Friend = props => {
    return (
        <div className="Friend">
            <h2>{props.name}</h2>
            <p>{props.date}</p>
            <p>{props.phoneNumber}</p>
        </div>
    );
};

Friend.defaultProps = {
    name: '',
    date: '',
    phoneNumber: ''
};

export default Friend;