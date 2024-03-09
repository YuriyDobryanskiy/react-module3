import styles from './SearchBox.module.css';

export const SearchBox = ({ search, setSearch }) => {
  const handleChange = event => {
    setSearch(event.target.value);
  };
  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name
        <input type="text" value={search} onChange={handleChange} />
      </label>
    </div>
  );
};
