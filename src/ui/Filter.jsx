import { useSearchParams } from "react-router-dom";

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div
        className="flex items-center gap-x-4 
      border border-secondary-100 bg-secondary-0 rounded-lg"
      >
        {options.map((option) => {
          const isActive = option.value === currentFilter;
          return (
            <button
              key={option.value}
              onClick={() => handleClick(option.value)}
              disabled={isActive}
              className={`whitespace-nowrap rounded-md py-2 px-4
               font-bold transition-all duration-300
               ${
                 isActive
                   ? "!bg-primary-900 text-white"
                   : "bg-secondary-0 text-secondary-800"
               }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;
