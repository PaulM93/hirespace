export function handleValidation(fields: {}) {
  let formIsValid = true;
  const fieldArr = Object.keys(fields);
  let errors: { [key: string]: boolean } = {};
  fieldArr.map((i: string) => {
    errors[i as keyof typeof errors] = false;
    if (!fields[i as keyof typeof fields]) {
      formIsValid = false;
      return (errors[i as keyof typeof errors] = true);
    }
  });
  return { errors: errors, formIsValid: formIsValid };
}
