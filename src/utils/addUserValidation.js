export const validateAddUserForm = (formData) => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  } else if (formData.name.trim().length < 3) {
    newErrors.name = "Name must be at least 3 characters";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is invalid";
  }

  const phoneDigits = formData.phone.replace(/\D/g, "");
  if (!formData.phone.trim()) {
    newErrors.phone = "Phone is required";
  } else if (phoneDigits.length < 10) {
    newErrors.phone = "Phone must have at least 10 digits";
  }

  if (!formData.address.trim()) {
    newErrors.address = "Address is required";
  } else if (formData.address.trim().length < 5) {
    newErrors.address = "Address must be at least 5 characters";
  }

  if (!formData.company.trim()) {
    newErrors.company = "Company is required";
  } else if (formData.company.trim().length < 3) {
    newErrors.company = "Company must be at least 3 characters";
  }

  const urlPattern = new RegExp(
    "^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*\\/?$"
  );
  if (!formData.website.trim()) {
    newErrors.website = "Website is required";
  } else if (!urlPattern.test(formData.website)) {
    newErrors.website = "Website must be a valid URL";
  }

  return newErrors;
};
