import { useState } from "react";
import getCapitalizedFirstLetter from "../utils/capitalize-first-letter";
import { FiFilter, FiSearch } from "react-icons/fi";
import { useCoreContext } from "../context/core-context";

export default function SearchForm({
  cores,
  statuses,
  original_launches,
  water_landings,
  setCurrentPage,
}) {
  let [searchQuery, setSearchQuery] = useState("");

  let [filters, setFilters] = useState({
    status: "",
    original_launch: "",
    water_landing: "",
  });

  let { setFilteredCores } = useCoreContext();

  const changeSearchQuery = (event) => {
    let value = event.target.value;
    setSearchQuery(value);
  };

  const changeFilter = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFilters((filter) => ({ ...filter, [name]: value }));
  };

  const submitSearch = (event) => {
    event.preventDefault();

    // let coresData = cores.filter((core) => core.status !== null);

    let filteredCoresData = cores.filter(
      ({ core_serial, status, original_launch, water_landing }) =>
        core_serial.includes(searchQuery) &&
        JSON.stringify(status).includes(filters.status) &&
        original_launch.includes(filters.original_launch) &&
        water_landing.toString().includes(filters.water_landing)
    );

    setCurrentPage(1);

    setFilteredCores(filteredCoresData);
  };

  const clearAllFilters = () => {
    Object.keys(filters).forEach((filter) => {
      delete filters[filter];
    });
    setSearchQuery("");
  };

  return (
    <form
      onSubmit={(event) => submitSearch(event)}
      className="flex flex-col mt-14 sm:mt-28 mx-auto p-4 sm:p-8 items-center sm:justify-center w-full md:w-[80%] lg:w-[70%] xl:w-[50%] gap-2 border shadow-lg rounded-md"
    >
      <input
        type="text"
        name="coreserial"
        value={searchQuery || ""}
        onChange={changeSearchQuery}
        placeholder="Core Serial. (Ex: Merlin1A)"
        className="w-full px-1.5 sm:px-3 py-1.5 text-sm sm:text-base text-space border border-darkSpace rounded-md"
      />

      <div className="flex flex-row w-full gap-2 self-start place-items-center">
        <div className="pl-1 text-center text-md sm:text-lg text-darkSpace">
          <FiFilter />
        </div>

        <select
          name="status"
          onChange={(event) => changeFilter(event)}
          className="w-full px-1 sm:px-2 py-1.5 text-sm sm:text-base text-space border border-darkSpace rounded-md cursor-pointer"
        >
          <option value={""}>Status</option>

          {statuses.map((status, index) => (
            <option value={status} key={index}>
              {getCapitalizedFirstLetter(
                status == null ? JSON.stringify(status) : status
              )}
            </option>
          ))}
        </select>

        <select
          name="original_launch"
          onChange={(event) => changeFilter(event)}
          className="w-full px-1 sm:px-2 py-1.5 text-sm sm:text-base text-space border border-darkSpace rounded-md cursor-pointer"
        >
          <option value={""} selected>
            Original Launch
          </option>

          {original_launches.map((launch, index) => (
            <option value={launch} key={index}>
              {launch}
            </option>
          ))}
        </select>

        <select
          name="water_landing"
          onChange={(event) => changeFilter(event)}
          className="w-full px-1 sm:px-2 py-1.5 text-sm sm:text-base text-space border border-darkSpace rounded-md cursor-pointer"
        >
          <option value={""} selected>
            Water Landing
          </option>

          {water_landings.map((landing, index) => (
            <option value={landing} key={index}>
              {getCapitalizedFirstLetter(landing.toString())}
            </option>
          ))}
        </select>
      </div>

      <div className="flex w-full items-center gap-2">
        <button
          type="submit"
          className="w-full mt-1 sm:mt-2 px-1.5 sm:px-3 py-1.5 text-sm text-center font-semibold text-white bg-darkSpace hover:bg-space border border-darkSpace rounded-md"
        >
          {/* <FiSearch /> */}
          Search
        </button>

        <button
          onClick={clearAllFilters}
          className="w-full mt-1 sm:mt-2 px-1.5 sm:px-3 py-1.5 text-sm text-center font-semibold text-darkSpace border border-darkSpace hover:bg-space/30 rounded-md"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
