import { useState } from 'react';

export default function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  const setFieldValue = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  const reset = () => {
    setValues(initialValues || {});
    setErrors({});
  };

  const handleSubmit = (onValid) => (e) => {
    e.preventDefault();
    const errs = validate ? validate(values) : {};
    setErrors(errs);
    if (!errs || Object.keys(errs).length === 0) {
      onValid(values);
    }
  };

  return { values, errors, setFieldValue, handleChange, handleSubmit, reset };
}
