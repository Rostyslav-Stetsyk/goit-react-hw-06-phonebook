import { useDispatch, useSelector } from 'react-redux';
import { ContactListStyled, ListElement } from './ContactList.styled';
import { deleteContact } from 'redux/action';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispach = useDispatch();

  return (
    <ContactListStyled>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter))
        .map(({ id, name, number }) => (
          <ListElement key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              id={id}
              onClick={e => dispach(deleteContact(e.target.id))}
            >
              Delete
            </button>
          </ListElement>
        ))}
    </ContactListStyled>
  );
};
