import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  {
    value: "latest",
    label: "جدیدترین",
  },
  {
    value: "earliest",
    label: "قدیمی ترین",
  },
];
const statusOptions = [
  {
    value: "ALL",
    label: "همه",
  },
  {
    value: "OPEN",
    label: "باز",
  },
  {
    value: "CLOSED",
    label: "بسته",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-2">
      <h1 className="text-lg font-bold ">لیست پروژه ها</h1>
      <div className="flex gap-x-5 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: "دسته بندی(همه)",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}
export default ProjectsHeader;
