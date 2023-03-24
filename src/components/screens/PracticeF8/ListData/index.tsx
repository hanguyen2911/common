import React, { useEffect, useState } from "react";

const ListData = () => {
  const buttons: string[] = ["posts", "todos", "albums"];
  const [data, setData] = useState<any>([]);
  const [type, setType] = useState("posts");
  const [loading, setLoading] = useState(true);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("â");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setData(data))
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handldeResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handldeResize);
    //cleanup function
    return () => {
      window.removeEventListener("resize", handldeResize);
    };
  }, []);

  const handleResetScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (loading) return <>loading..</>;

  return (
    <>
      <h2>{width}</h2>
      {Array.isArray(buttons)
        ? buttons?.map((tab) => (
            <button
              style={
                type === tab
                  ? {
                      color: "#fff",
                      backgroundColor: "pink",
                    }
                  : {}
              }
              key={tab}
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))
        : ""}

      <ul>
        {data?.map((item: any, index: number) => (
          <li key={index}>{item.title || item.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            background: "pink",
          }}
          onClick={handleResetScroll}
        >
          top
        </button>
      )}
    </>
  );
};
export default ListData;
