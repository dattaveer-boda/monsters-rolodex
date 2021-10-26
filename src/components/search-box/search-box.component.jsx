import './search-box.styles.css';

export default function SearchBox({placeholder, handleChange}) {
    return (
        <input
          className="search"
          type="search"
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
        />
    )
}