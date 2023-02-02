import { useDispatch, useSelector } from "react-redux";

import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

import { clearFilter, removeFilter } from "store/filters/filter-actions";
import { selectorFilters } from "store/filters/filter-selectors";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectorFilters);

  if (currentFilters.length === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              onClear={() => dispatch(removeFilter(filter))}
              key={filter}
              variant="clearable"
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
