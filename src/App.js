import React, { useState } from "react";
import Body from "./body";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./About";
import Accordion from "./Accordion";
import Comments from "./Comments";

const App = () => {
  const [lang, setLang] = useState("en");
  return (
    <>
      <div className=" h-14 bg-black text-white flex justify-evenly">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/accordion">Accordion</a>
        <a href="/comments">Comments</a>

        <select
          className="bg-black text-white"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
        </select>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About lang={lang} />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
