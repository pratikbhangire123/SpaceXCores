export function CoresLoader() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
    <div
      key={index}
      className="w-full h-[35vh] bg-gray-300 rounded-md animate-pulse"
    ></div>
  ));
}
