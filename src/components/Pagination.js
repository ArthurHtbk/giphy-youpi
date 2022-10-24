const Pagination = ({ limit, setLimit, offset, setOffset }) => {
  return (
    <div className="pagination">
      <div className="filter">
        {limit > 5 && (
          <button
            onClick={() => {
              setLimit((limit -= 5));
              setOffset(0);
            }}
          >
            -
          </button>
        )}
        <span>Display</span>
        <span className="title">{limit}</span>
        <span>results at a time</span>
        {limit < 50 && (
          <button
            onClick={() => {
              setLimit((limit += 5));
              setOffset(0);
            }}
          >
            +
          </button>
        )}
      </div>
      <div className="pages">
        {offset && (
          <button onClick={() => setOffset((offset -= limit))}>
            Previous page
          </button>
        )}
        <button onClick={() => setOffset((offset += limit))}>Next page</button>
      </div>
    </div>
  );
};

export default Pagination;
