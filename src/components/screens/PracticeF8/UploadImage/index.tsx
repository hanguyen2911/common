import { useState, useEffect } from "react";

function UpLoadURL() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    //cleanup xoá bộ nhớ trước khi callback
    return () => {
      avatar && URL.revokeObjectURL(avatar);
    };
  }, []);

  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0];
    const fileImage = URL.createObjectURL(file);
    console.log("file", fileImage);
    setAvatar(fileImage as any);
  };

  return (
    <div>
      {" "}
      <input type="file" onChange={handlePreviewAvatar} />{" "}
      {avatar && <img src={avatar} alt="" width="80%" />}{" "}
    </div>
  );
}

export default UpLoadURL;
