import * as Yup from 'yup';

export const userFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name cannot exceed 50 characters')
    .required('First Name is compulsory'),
  lastName: Yup.string()
    .trim()
    .min(2, 'Last Name must be at least 2 characters')
    .max(50, 'Last Name cannot exceed 50 characters')
    .required('Last Name is compulsory'),
  role: Yup.string()
    .oneOf(['Owner', 'User', 'Admin'], 'Please select a valid role')
    .required('Role is compulsory')
});
