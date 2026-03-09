import css from "./SearchForm.module.css";

interface Props {
  onSearch: (keyWord: string) => void;
}

export const SearchForm = ({ onSearch }: Props) => {
  const handleSubmit = (FormData: FormData) => {
    const keyWord = FormData.get("keyword") as string;
    keyWord.trim();
    if (keyWord) {
      onSearch(keyWord);
    }
  };

  return (
    <form
      action={handleSubmit}
      className={css.search_form}
    >
      <input
        type="text"
        name="keyword"
        placeholder="Search..."
        className={css.search_form_input}
      />
      <button type="submit">Search</button>
    </form>
  );
};
