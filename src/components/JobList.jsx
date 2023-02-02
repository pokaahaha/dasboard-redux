import { useDispatch, useSelector } from "react-redux";
import { selectVisiblePositions } from "store/positions/position-selectors";
import { JobPosition } from "./JobPosition";

import { addFilter } from "store/filters/filter-actions";
import { selectorFilters } from "store/filters/filter-selectors";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectorFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );
  
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
