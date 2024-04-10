import css from './Contact.module.css';
import icons from './icons.svg';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contacts}>
      <div className={css.contact}>
        <p className={css.text}>
          <svg className={css.icon} width="24" height="24">
            <use href={`${icons}#icon-person`}></use>
          </svg>
          {name}
        </p>
        <p className={css.phone}>
          <svg className={css.icon} width="24" height="26">
            <use href={`${icons}#icon-phone`}></use>
          </svg>
          {number}
        </p>
      </div>
            <button className={css.sbmbtn} onClick={() => onDelete(id)}>
        Delete
      </button>
        </div>
    );
}