import { useCoreContext } from "../context/core-context";
import CoreDetails from "./core-details";
import { useState } from "react";
import Core from "./core";
import { CoresLoader } from "./ui-components/loaders";

export default function CoresGrid({ cores, coresRange, loading }) {
  let { filteredCores } = useCoreContext();

  let [selectedCore, setSelectedCore] = useState();

  let [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="md:mx-4 mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {dialogOpen == true && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-black/80"></div>
      )}
      {dialogOpen == true && (
        <CoreDetails
          selectedCore={selectedCore}
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
        />
      )}

      {loading ? (
        <CoresLoader />
      ) : (
        (filteredCores.length > 0 ? filteredCores : cores)
          .slice(coresRange.from, coresRange.to)
          .map((core, index) => (
            <Core
              key={index}
              core={core}
              dialogOpen={dialogOpen}
              setDialogOpen={setDialogOpen}
              setSelectedCore={setSelectedCore}
            />
          ))
      )}
    </div>
  );
}
