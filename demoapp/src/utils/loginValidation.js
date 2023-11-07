import * as yup from 'yup';

export const loginValidation = yup.object({
    username: yup.string()
        .required('User name required')
        .max(10, 'User name cannot be more than 10 characters')
        .min(5,"Minimum characters to be 5")
        ,
    password: yup.string()
        .required('Password is required')
});