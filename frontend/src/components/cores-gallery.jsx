import { useDispatch, useSelector } from "react-redux";
import { getCores } from "../redux/slices/core-slice";
import { useEffect, useState } from "react";
import SearchForm from "./search-form";
import CoresGrid from "./cores-grid";
import Pagination from "./pagination";
import { useCoreContext } from "../context/core-context";

export default function CoresGallery() {
  let { filteredCores } = useCoreContext();

  const [totalPages, setTotalPages] = useState();

  let [currentPage, setCurrentPage] = useState(1);

  const MAX_CORES_PER_PAGE = 6;

  let [coresRange, setCoresRange] = useState({
    from: 0,
    to: 9,
  });

  const dispatch = useDispatch();

  const { cores, statuses, original_launches, water_landings, loading } =
    useSelector((state) => state.cores);

  useEffect(() => {
    dispatch(getCores({}))
      .unwrap()
      .then((response) => {
        if (response) {
          setTotalPages(
            Math.ceil(
              (filteredCores.length > 0 ? filteredCores.length : cores.length) /
                MAX_CORES_PER_PAGE
            )
          );

          setCoresRange({
            from: (currentPage - 1) * MAX_CORES_PER_PAGE,
            to: coresRange.from + MAX_CORES_PER_PAGE,
          });
        }
      });
  }, [
    dispatch,
    statuses.length,
    original_launches.length,
    water_landings.length,
    filteredCores,
  ]);

  return (
    <section id="cores-gallery" className="px-4 sm:px-5">
      <SearchForm
        cores={cores}
        statuses={statuses}
        original_launches={original_launches}
        water_landings={water_landings}
        setCurrentPage={setCurrentPage}
      />
      <CoresGrid cores={cores} coresRange={coresRange} loading={loading} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        coresRange={coresRange}
        setCoresRange={setCoresRange}
        MAX_CORES_PER_PAGE={MAX_CORES_PER_PAGE}
      />
    </section>
  );
}

// const statusFilter = {};

// const launchFilter = {};

// const landingFilter = {};

// statuses.map((status) => {
//   if (status) {
//     statusFilter[status] = false;
//   }
// });

// original_launches.map((launch) => {
//   if (launch) {
//     launchFilter[launch] = false;
//   }
// });

// water_landings.map((landing) => {
//   if (landing) {
//     landingFilter[landing] = false;
//   }
// });

// setFilters({
//   ...filters,
//   status: statusFilter,
//   original_launch: launchFilter,
//   water_landing: landingFilter,
// });
