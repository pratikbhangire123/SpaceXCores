import spacex from "../assets/spacex.jpg";

export default function Core({
  core,
  dialogOpen,
  setDialogOpen,
  setSelectedCore,
}) {
  const viewCoreDetails = (coreData) => {
    setDialogOpen(!dialogOpen);

    if (dialogOpen == false) {
      setSelectedCore(coreData);

      document.body.style.overflowY = "hidden";

      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowY = "scroll";

      document.body.style.overflowX = "hidden";
    }
  };

  return (
    <div
      id="core"
      value={core}
      onClick={() => viewCoreDetails(core)}
      className={`w-full h-[35vh] border bg-white border-gray-300 rounded-md drop-shadow hover:drop-shadow-xl transition ease-in-out duration-200 delay-100 hover:-translate-y-1 ${
        dialogOpen ? "cursor-default" : "cursor-pointer"
      } `}
    >
      <div className="grid grid-rows-[70%_30%] h-full">
        <img src={spacex} className="h-full rounded-t-md opacity-60" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs font-medium text-gray-500">core_serial:</p>
          <p className="font-semibold sm:font-bold text-darkSpace">
            {core.core_serial}
          </p>
        </div>
      </div>
    </div>
  );
}
