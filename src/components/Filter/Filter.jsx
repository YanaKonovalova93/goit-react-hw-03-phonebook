import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { FilterLabel } from './Filter.styled';

const initialValues = {
  filter: '',
};

export const Filter = ({ onFilterChange, value }) => {
  function onChange(event) {
    const filterInput = event.target.value;
    onFilterChange(filterInput);
  }
  return (
    <Formik initialValues={initialValues}>
      <FilterLabel>
        Find contacts by name
        <Field type="text" name="filter" value={value} onChange={onChange} />
      </FilterLabel>
    </Formik>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
