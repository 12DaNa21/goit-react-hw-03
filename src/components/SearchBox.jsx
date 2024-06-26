import css from './SearchBox.module.css'
export default function SearchBox({ value, onChange }) {
    return (
       <div className={css.search}>
       <p className={css.text}>Find contacts by name</p>
      <input className={css.input}
        type="text"
        
        value={value}
        onChange={onChange}
      />
      </div>
    );
  }