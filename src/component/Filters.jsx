const Filter = ({ state, setState }) => {
  return (
    <div className=" ">
      <button
        className="border-border border-2 px-4 rounded-lg py-1 hover:bg-brand hover:text-white"
        onClick={() => setState(!state)}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
