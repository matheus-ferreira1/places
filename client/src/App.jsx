import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import Form from "./components/Form";
import Posts from "./components/Posts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <header className="flex justify-center items-center my-3 ">
        <h1 className="text-3xl font-bold">Places...</h1>
      </header>
      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <Posts />
          </div>
          <div className="col-span-1">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
