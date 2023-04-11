const Pagination = () => {
  return (
    <div className="pagination">
      <div className="filter">
          <button>
            -
          </button>
        <span>No results</span>
        <span className="title"></span>
        <span>yet</span>
          <button>
            +
          </button>
      </div>
      <div className="pages">
          <button>
            Previous page
          </button>
        <button>Next page</button>
      </div>
    </div>
  );
};

export default Pagination;
