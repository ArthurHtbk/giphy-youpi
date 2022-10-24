const Gif = ({ gif, setSelectedGif }) => {
  return (
    <img
      className="gif-image"
      src={gif.images.downsized.url}
      alt={gif.title}
      onClick={() => setSelectedGif(gif)}
    />
  );
};

export default Gif;
