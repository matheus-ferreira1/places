import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  // const post = useSelector((state) =>
  //   currentId ? state.posts.find((message) => message._id === currentId) : null
  // );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  const clear = () => {
    // setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  return (
    <form autoComplete="off" noValidate className="p-2" onSubmit={handleSubmit}>
      <h6 className="text-xl font-semibold text-center">Add a new place</h6>
      <input
        className="border border-gray-300 px-3 py-2 mt-2 rounded-sm w-full"
        type="text"
        name="creator"
        placeholder="Creator"
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
      />
      <input
        className="border border-gray-300 px-3 py-2 mt-2 rounded-sm w-full"
        type="text"
        name="title"
        placeholder="Title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <textarea
        className="mb-0 border border-gray-300 px-3 py-2 mt-2 rounded-sm w-full"
        name="message"
        placeholder="Message"
        rows={4}
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      />
      <input
        className="border border-gray-300 px-3 py-2 rounded-sm w-full"
        type="text"
        name="tags"
        placeholder="Tags (coma separated)"
        value={postData.tags}
        onChange={(e) =>
          setPostData({ ...postData, tags: e.target.value.split(",") })
        }
      />
      {/* <div className="mt-2">
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </div> */}
      <button
        className="bg-blue-500 text-white font-semibold px-4 py-2 mt-2 rounded-sm w-full"
        type="submit"
      >
        Submit
      </button>
      <button
        className="bg-red-500 text-white font-semibold px-4 py-1 mt-1 rounded-sm w-full"
        onClick={clear}
      >
        Clear
      </button>
    </form>
  );
};

export default Form;
