const Selected = ({ selectedGif }) => {
  return (
    <div className="selected">
      <img src={selectedGif.images.downsized.url} alt={selectedGif.title} />
    </div>
  );
};

export default Selected;
