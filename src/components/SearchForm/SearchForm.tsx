interface Props {
  onSearch: (keyWord: string) => void;
}

export const SearchForm = ({ onSearch }: Props) => {
  const handleSubmit = (FormData: FormData) => {
    const keyWord = FormData.get("keyword") as string;

    onSearch(keyWord);
  };

  return (
    <form action={handleSubmit}>
      <input
        type="text"
        name="keyword"
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
