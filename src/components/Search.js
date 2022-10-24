import Gif from "./Gif";

const Search = ({ data, value, setValue, setSelectedGif }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div className="gallery">
        {data.data.map((gif) => {
          return <Gif gif={gif} key={gif.id} setSelectedGif={setSelectedGif} />;
        })}
      </div>
    </div>
  );
};

export default Search;
