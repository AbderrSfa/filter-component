import { useState } from "react";
import Input from "./input";

function Group() {
  const [filters, setFilters] = useState<number[]>([0]);
  const [count, setCount] = useState(1);

  const addFilter = () => {
    setCount((prevCount) => prevCount + 1);
    filters.push(count);
    setFilters(filters);
  };
  return (
    <div className="border-2 p-2 rounded-lg">
      {filters.map((filter, idx) => {
        return <Input key={idx} filter={filter} />;
      })}
      <button className="" onClick={addFilter}>
        <p className="text-gray-500">+ Add filter</p>
      </button>
    </div>
  );
}

export default Group;
