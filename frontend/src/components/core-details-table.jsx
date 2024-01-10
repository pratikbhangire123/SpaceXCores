import getCapitalizedFirstLetter from "../utils/capitalize-first-letter.js";

export default function CoreDetailsTable({ name, data }) {
  return (
    <table className="grid grid-cols-[40%_50%] w-full h-fit items-center border-b-[0.5px] gap-1 sm:gap-4 overflow-y-auto">
      <th className="p-1 text-right text-xs sm:text-sm font-normal sm:font-medium text-darkSpace/80">{name}</th>
      <td className="place-self-left text-xs sm:text-sm font-semibold sm:font-bold text-darkSpace/90">
        {getCapitalizedFirstLetter(
          JSON.stringify(data).replace(/[^a-zA-Z0-9-:.]/g, " ")
        )}
      </td>
    </table>
  );
}
