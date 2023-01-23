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

  useEffect(() => {
    axios
      .get(
        `https://giphy-back-production.up.railway.app/gifs?value=${value}&limit=${limit}&offset=${offset}`
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
