export type SearchProps = {
  onChangeValue: (value: string) => void;
  searchValue: any;
  onSubmit: () => void;
  placeholder?: string;
  width?: string;
  height?: string;
  clearInput?: () => void;
};
