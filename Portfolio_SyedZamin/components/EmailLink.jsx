"use client";

import { useState } from "react";

const EMAIL = "Syedmzhaider@gmail.com";

export default function EmailLink({ className = "", label = "Email" }) {
  const [text, setText] = useState(label);

  const handleClick = (e) => {
    e.preventDefault();
    setText(EMAIL);
    navigator.clipboard?.writeText(EMAIL).catch(() => {});
    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}`;
    }, 500);
  };

  return (
    <a href={`mailto:${EMAIL}`} onClick={handleClick} className={className}>
      {text}
    </a>
  );
}
