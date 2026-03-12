import { type DebouncedState } from "use-debounce";
import { StyledSearch, StyledSearchInput } from "./SearchForm.styled";

interface Props {
  onSearch: DebouncedState<React.Dispatch<React.SetStateAction<string>>>;
  defaultValue: string;
}

export const SearchForm = ({ defaultValue, onSearch }: Props) => {
  return (
    <StyledSearch>
      <StyledSearchInput
        defaultValue={defaultValue}
        onChange={e => onSearch(e.target.value)}
      />
    </StyledSearch>
  );
};
