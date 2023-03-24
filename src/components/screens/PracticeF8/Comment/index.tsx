import React, { useEffect, useState } from "react";

const Comment = () => {
  const [lessonId, setLessonId] = useState(1);
  const [content, setContent] = useState("");
  const data = [
    { id: 1, content: "lesson 1" },
    { id: 2, content: "lesson 2" },
    { id: 3, content: "lesson 3" },
  ];
  useEffect(() => {
    const handleComment = (e: any) => {
      setContent(e.detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {data?.map((item: any) => (
          <li
            style={{ color: lessonId === item?.id ? "red" : "#000" }}
            key={item.index}
            onClick={() => {
              setLessonId(item?.id);
            }}
          >
            {item.content}
          </li>
        ))}
      </ul>
      <h3>{content}</h3>
    </div>
  );
};
export default Comment;
