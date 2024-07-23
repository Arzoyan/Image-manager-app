import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Post } from '../../types/post';

interface AddEditPostFormProps {
    post: Post | null;
    onSubmit: (post: Post) => void;
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.string().required('Image is required'),
});

const AddEditPostForm: React.FC<AddEditPostFormProps> = ({ post, onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            title: post?.title || '',
            description: post?.description || '',
            image: post?.image || '',
        },
        validationSchema,
        validateOnChange: false,
        onSubmit: (values) => {
            onSubmit({ id: post ? post.id : Date.now(), ...values });

        },
    });

    useEffect(() => {
        if (post) {
            formik.setValues({
                title: post.title,
                description: post.description,
                image: post.image,
            });
        }
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formik.setFieldValue('image', reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
            <input
                className="border p-2"
                type="text"
                name="title"
                placeholder="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
            />
            {formik.errors.title && <div className="text-red-500">{formik.errors.title}</div>}
            <textarea
                className="border p-2"
                name="description"
                placeholder="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
            />
            {formik.errors.description && <div className="text-red-500">{formik.errors.description}</div>}
            <input
                className="border p-2"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            {formik.values.image && <img src={formik.values.image} alt="Preview" className="mt-2" width="200px" />}
            {formik.errors.image && <div className="text-red-500">{formik.errors.image}</div>}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                type="submit"
            >
                {post ? 'Update Post' : 'Add Post'}
            </button>
        </form>
    );
};

export default AddEditPostForm;
