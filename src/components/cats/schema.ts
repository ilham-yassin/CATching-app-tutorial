import { object, string } from 'yup';

export const addCatFormFieldsSchema = object({
    catName: string().required().trim().min(5)
})