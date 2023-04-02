import "./styles.css";
import React, { useState } from "react";
import Input from "./Input";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";

export default function App() {
  const [story, setStory] = useState("");
  const [name, setName] = useState("Bob");
  const [newName, setNewName] = useState("name");
  const [country, setCountry] = useState("");
  const [storyVisible, setStoryVisible] = useState("hidden");

  const storyText =
    "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

  const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const insertY = ["the soup kitchen", "Disneyland", "the White House"];
  const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
  ];

  const randomValueFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  // const handleNameChange = (event) => {
  //   setNewName(event.target.value);
  // };

  const generateStory = () => {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if (name !== "") {
      newStory = newStory.replace("Bob", name);
    }

    if (country === "UK") {
      const weight = Math.round(300 * 0.0714286) + " stone";
      const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
      newStory = newStory.replace("94 farenheit", temperature);
      newStory = newStory.replace("300 pounds", weight);
    }

    setStory(newStory);
  };

  return (
    <div>
      {/* <div>
        <input
          id="customname"
          type="text"
          placeholder="Enter a name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div> */}

      <div>
        <Input
          type="text"
          label="First Name"
          onChangeInput={(val) => {
            return setName(val);
          }}
        />
      </div>

      <br />

      {/* <div>
        <label>US</label>
        <input
          type="radio"
          name="UKUS"
          value="US"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />

        <label>UK</label>
        <input
          type="radio"
          name="UKUS"
          value="UK"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </div> */}

      <div>
        <RadioGroup
          values={["US", "UK"]}
          groupName="Country"
          defaultCheckedIndex={0}
          onChangeSelected={(val) => {
            setCountry(val);
          }}
        />
      </div>

      <br />

      <div>
        <button
          onclick={async () => {
            setNewName(name);
            setStoryVisible("visible");
          }}
          className="randomize"
          onClick={generateStory}
        >
          Generate random Story
        </button>
      </div>

      <p
        className="story"
        style={{
          display: "flex",
          visibility: story ? "visible" : "hidden",
          backgroundColor: "#dec0f1",
          width: "90%",
          marginTop: "40px",
          padding: "10px",
          paddingRight: "10px"
        }}
      >
        {story}
      </p>
    </div>
  );
}
