import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { Form, Input, SearchButton, SearchIcon } from './SearchForm.styled';

function SearchForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      value: '',
    },
    onSubmit: values => {
      onSubmit(values.value);
      formik.resetForm();
    },
  });

  const { handleSubmit, handleChange, values } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="value"
        onChange={handleChange}
        value={values.value}
        placeholder="Search movies"
      />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
