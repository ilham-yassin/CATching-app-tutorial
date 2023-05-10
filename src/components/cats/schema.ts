import { array, object, string } from 'yup';

export const addCatFormFieldsSchema = object({
    catName: string().required().trim().min(5).label('Cat Name')
})

export const addMultipleCatsFormFieldsSchema = object({
    catNames: array().of(string().required().label('Cat Name')).default([]).min(1).label('Cat Names')
})