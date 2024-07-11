import React from "react";
import { useState } from "react";

const EventPractice = () => {
  const [state, setState] = useState({ username: "", message: "" });

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    alert(state.username + ": " + state.message);
    setState({ username: "", message: "" });
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={state.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={state.message}
        onChange={handleChange}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
