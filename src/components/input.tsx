import Filter from "./filter";

type Props = {
  filter: number;
};

function Input({ filter }: Props) {
  return (
    <div className="flex items-center gap-1">
      {filter === 0 ? (
        <label>Where</label>
      ) : (
        <select className="rounded-lg bg-gray-200 px-1 py-1 text-sm text-gray-500">
          <option>AND</option>
          <option>OR</option>
        </select>
      )}
      <Filter />
    </div>
  );
}

export default Input;
