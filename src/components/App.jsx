import React from "react";
import Emoji from "../emojipedia"
import Card from "./Card"

// const { EmojiAPI } = require("emoji-api");
// const emoji = new EmojiAPI();


function createCard(emoji_prop){
  return(
    <Card
    // key={emoji.id}
    icon={emoji_prop.character}
    name={emoji_prop.unicodeName}
    des={emoji_prop.meaning}
    />
  );

}

// emoji.get("🥺")
//     .then(emoji => {
//         console.log(emoji);
//     })

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {Emoji.map(createCard)}
      {/* <Card
      icon=""
      /> */}
      </dl>
    </div>
  );
}

export default App;
