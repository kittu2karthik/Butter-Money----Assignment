import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormField from "../../ui/FormField";
import { addLocalUser } from "./usersSlice";
import Form from "../../ui/Form";
import { validateAddUserForm } from "../../utils/addUserValidation";

import Button from "../../ui/Button";

const FormTitle = styled.h2`
  color: var(--color-brand-600);
  margin-bottom: 0.8rem;
`;

function AddUserForm({ onSuccess }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    website: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateAddUserForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: { name: formData.company },
      address: { street: formData.address, city: "" },
      website: formData.website,
    };

    dispatch(addLocalUser(newUser));
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      company: "",
      website: "",
    });
    if (onSuccess) onSuccess();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Add New User</FormTitle>

      <FormField
        label="Name"
        id="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <FormField
        label="Email"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormField
        label="Phone"
        id="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <FormField
        label="Address"
        id="address"
        type="text"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />

      <FormField
        label="Company"
        id="company"
        type="text"
        value={formData.company}
        onChange={handleChange}
        error={errors.company}
      />

      <FormField
        label="Website"
        id="website"
        type="url"
        value={formData.website}
        onChange={handleChange}
        error={errors.website}
      />

      <Button type="submit">Add User</Button>
    </Form>
  );
}

export default AddUserForm;
