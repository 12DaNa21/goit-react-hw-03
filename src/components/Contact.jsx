import css from './Contact.module.css';
export default function Contact( { data: { id, name, number } , onDelete } ) {
    return (
        <div className={css.contacts}>
            <div  className={css.contact}>
            <svg className={css.icons} width="16" height="16">
                  <use href="../assets/icons.svg#icon-phone"></use>
                </svg>
            <p className={css.text}>{name}</p>
            <p className={css.phone}>{number}</p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
        </div>
    );
}