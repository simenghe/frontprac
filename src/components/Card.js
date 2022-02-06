import { useState } from "react";

export default function Card({ username, idx, setCards }) {
  const [blur, setBlur] = useState(true);
  return (
    <div
      className={`text-black h-full rounded-lg border drop-shadow-lg bg-green-300 ${
        blur ? "blur-sm" : "blur-none"
      } hover:bg-green-900 aspect-video`}
      onClick={() => setBlur((prev) => !prev)}
    >
      <h1>{username}</h1>
      <h1>{username}</h1>
      <h1>{username}</h1>
      <h1>{username}</h1>
    </div>
  );
}
