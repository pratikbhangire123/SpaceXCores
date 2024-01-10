import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  coresRange,
  setCoresRange,
  MAX_CORES_PER_PAGE,
}) {
  const goToRecentPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);

      setCoresRange({
        from: coresRange.from - MAX_CORES_PER_PAGE,
        to: coresRange.to - MAX_CORES_PER_PAGE,
      });
    }
  };

  const goToNextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage + 1);

      setCoresRange({
        from: coresRange.from + MAX_CORES_PER_PAGE,
        to: coresRange.to + MAX_CORES_PER_PAGE,
      });
    }
  };

  return (
    <div className="flex items-center justify-between sm:mx-4 md:mx-8 mt-10 md:mt-16">
      <button
        onClick={goToRecentPage}
        className={`px-2 sm:px-3 py-1.5 text-lg sm:text-xl ${
          currentPage == 1 ? "text-white/50" : "text-white"
        } ${
          currentPage == 1 ? "bg-darkSpace/50" : "bg-darkSpace hover:bg-space"
        }  rounded-md ${
          currentPage == 1 ? "cursor-not-allowed" : " cursor-pointer"
        }`}
      >
        <FiArrowLeft />
      </button>
      <p className="font-semibold text-space">
        {currentPage} of {totalPages}
      </p>
      <button
        onClick={goToNextPage}
        className={`px-2 sm:px-3 py-1.5 text-lg sm:text-xl  ${
          currentPage == totalPages ? "text-white/50" : "text-white"
        } ${
          currentPage == totalPages
            ? "bg-darkSpace/50"
            : "bg-darkSpace hover:bg-space"
        }  rounded-md ${
          currentPage == totalPages ? "cursor-not-allowed" : " cursor-pointer"
        }`}
      >
        <FiArrowRight />
      </button>
    </div>
  );
}
