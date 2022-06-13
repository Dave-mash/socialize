import Filter from 'bad-words';
import * as Yup from "yup";

const filter = new Filter();

export const PostSchema = Yup.object().shape({
    title: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Your name is required'),
    description: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .email("Invalid email address format")
        .required("Email is required")
})