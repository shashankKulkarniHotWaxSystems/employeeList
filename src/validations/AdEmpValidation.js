import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email:  yup.string().email().required(),
    mobno: yup.string().min(10).max(10).required()
});