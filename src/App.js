import React from "react";
import { useState } from "react";
import "./styles.css";
import { useRef } from "react";

function WordCount(props) {
  const textAreaRef = useRef();
  const [wordCount, setWordCount] = useState(0);

  const countWords = (e) => {
    const text = textAreaRef.current.value;
    setWordCount(text.split(" ").length);
  };

  return (
    <>
      <textarea ref={textAreaRef} onChange={countWords} />
      <br />
      <button onChange={countWords}>Count Words</button>
      <p>{wordCount} words.</p>
    </>
  );
}

const App = () => {
  const [count, setCount] = useState(0);
  const [charcount, setCharcount] = useState(0);
  const [maxlen, setMaxlen] = useState(0);
  const [size, setSize] = useState(0);

  let change = (e) => {
    wordcount(e.target.value);
  };

  function wordcount(str) {
    let c = 0;
    let str1 = str.split(" ");
    charCout(str);

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
        setCount(0);
      }
      if (str1[i] !== "") {
        c++;
      }
      setCount(c);
    }
  }

  function charCout(str) {
    let c = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        c++;
      }
    }
    setCharcount(c);
  }
  let maxfun = (e) => {
    setMaxlen(e.target.value);
  };

  const sizechange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="main">
      <WordCount />
    </div>
  );
};

export default App;
