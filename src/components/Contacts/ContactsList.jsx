import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ContactsList.styled';

export const ContactsList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data.map(item => {
        return (
          <Item key={item.id}>
            {item.name}: {item.number}
            <button
              onClick={() => {
                deleteContact(item.id);
              }}
            >
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
