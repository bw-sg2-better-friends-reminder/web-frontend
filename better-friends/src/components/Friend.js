import React from "react";


const truncate = (text, limit, ending = "...") => {
  const splitText = text.split(" ");
  if (splitText.length > limit) {
    const reducedText = splitText.slice(0, limit);
    const addedEnding = [...reducedText, ending];
    return addedEnding.join(" ");
  }
  return text;
};

const ListItem = props => {
  const { date, person, phoneNumber, message } = props;
  return (
    <li>
      <h1>{person}</h1>
      <p>
        <time>{date}</time>
      </p>
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      <p>{truncate(message, 50)}</p>
    </li>
  );
};

function Friend() {
  return (
    <div className="App">
      <ListItem
        date={"7/7/2017"}
        person={"Lucy"}
        phoneNumber={"555-555-5555"}
        message={"Purchase Painting"}
      />
    </div>
  );
}

export default Friend;
