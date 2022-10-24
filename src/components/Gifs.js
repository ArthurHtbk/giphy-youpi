import { useState, useEffect } from "react";
import axios from "axios";
import Selected from "./Selected";
import Search from "./Search";
import Pagination from "./Pagination";

const Gifs = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("hello");
  const [selectedGif, setSelectedGif] = useState();
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const API_PUBLIC_KEY = "fLAPyOv83MRfVK1BEW1YxCQCgbyWF0Fw";

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_PUBLIC_KEY}&q=${value}&limit=${limit}&offset=${offset}&rating=g`
      )
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [value, limit, offset]);

  return isLoading ? (
    <section>
      <h2 className="title">Loading...</h2>
    </section>
  ) : (
    <section>
      {selectedGif && <Selected selectedGif={selectedGif} />}
      <Search
        data={data}
        value={value}
        setValue={setValue}
        setSelectedGif={setSelectedGif}
      />
      <Pagination
        limit={limit}
        setLimit={setLimit}
        offset={offset}
        setOffset={setOffset}
      />
    </section>
  );
};

export default Gifs;
