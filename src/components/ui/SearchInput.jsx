export const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="mt-20 flex justify-center" id="searchInput">
      <div className="flex gap-2 items-center p-1 m-auto">
        <input
          type="text"
          placeholder="Buscar propiedad"
          className="rounded-md border-neutral-400 border-1 text-xs p-1 w-48 items-center text-center "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <i></i>
      </div>
    </div>
  );
};
