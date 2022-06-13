import * as React from "react"
import { useFormik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { PostSchema } from '../utils/PostSchema'
import '../styles/components/contact.css'


const PostForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            file: ''
        },
        validationSchema: PostSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            resetForm();
            setSubmitting(false);
            console.log(values)
        },
    });

    return (
        <div className="contactSection" id="contact">
            <h1 className="contactSectionTitle">Post Content</h1><br />
            <form onSubmit={formik.handleSubmit} className="form">
                <TextField
                    name="title"
                    label="Title"
                    variant="outlined"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    fullWidth
                /><br /><br />
                <TextField
                    type="description"
                    name="description"
                    label="Description"
                    variant="outlined"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    fullWidth
                /><br /><br />
                <TextField
                    id="file"
                    name="file"
                    label="File"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject}
                    fullWidth
                /><br /><br />
                <Button
                    type="submit"
                    variant="contained"
                    className="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default PostForm