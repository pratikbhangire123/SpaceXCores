import CoreDetailsTable from "./core-details-table";
import { FiX } from "react-icons/fi";

export default function CoreDetails({
  selectedCore,
  dialogOpen,
  setDialogOpen,
}) {
  const exitCoreDetails = () => {
    if (dialogOpen === true) {
      document.body.style.overflowY = "scroll";

      document.body.style.overflowX = "hidden";

      setDialogOpen(false);
    }
  };

  return (
    <div className="fixed flex flex-col inset-y-0 w-[90%] md:w-[80%] lg:w-[60%] h-[95%] md:h-[90%] my-auto place-self-center justify-center px-4 lg:px-8 py-8 z-50 text-darkSpace bg-white border border-gray-200 shadow rounded-md">
      <button
        onClick={exitCoreDetails}
        className="absolute top-4 right-4 px-1.5 sm:px-3 py-1.5 text-xl sm:text-2xl text-darkSpace"
      >
        <FiX />
      </button>

      <h3 className="text-center text-lg sm:text-xl font-bold sm:font-extrabold text-space">
        {selectedCore.core_serial}
      </h3>

      <p className="mx-4 sm:mx-8 mt-4 mb-6 text-xs text-center text-darkSpace/60">
        {selectedCore.details}
      </p>

      <div className="py-6 overflow-y-scroll">
        <CoreDetailsTable name="Block" data={selectedCore.block} />

        <CoreDetailsTable name="Status" data={selectedCore.status} />

        <CoreDetailsTable
          name="Original Launch"
          data={selectedCore.original_launch}
        />

        <CoreDetailsTable
          name="Original Launch UNIX"
          data={selectedCore.original_launch_unix}
        />

        {selectedCore.missions.map((mission) => (
          <>
            <CoreDetailsTable name="Mission Name" data={mission.name} />

            <CoreDetailsTable name="Mission Flight" data={mission.flight} />
          </>
        ))}

        <CoreDetailsTable name="Reuse Count" data={selectedCore.reuse_count} />

        <CoreDetailsTable
          name="RTLS Attempts"
          data={selectedCore.rtls_attempts}
        />

        <CoreDetailsTable
          name="RTLS Landings"
          data={selectedCore.rtls_landings}
        />

        <CoreDetailsTable
          name="ASDS Attempts"
          data={selectedCore.asds_attempts}
        />

        <CoreDetailsTable
          name="ASDS Landings"
          data={selectedCore.asds_landings}
        />

        <CoreDetailsTable
          name="Water Landing"
          data={selectedCore.water_landing}
        />
      </div>
    </div>
  );
}
