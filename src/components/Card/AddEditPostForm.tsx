import React, { useEffect } from 'react';
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';
import { Post } from '../../types/post';
import { FaUpload } from 'react-icons/fa';

interface AddEditPostFormProps {
    post: Post | null;
    onSubmit: (post: Post) => void;
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.string().required('Image is required'),
    date: Yup.string().required('Date is required'),
});

const AddEditPostForm: React.FC<AddEditPostFormProps> = ({ post, onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            title: post?.title || '',
            description: post?.description || '',
            image: post?.image || '',
            date: post?.date || '',
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
                date: post.date,
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
            <div className='flex flex-col mb-[8px] text-[#6B6B6B] font-semibold text-lg'>
                <span>Name</span>
                <input
                    className="w-full max-w-[644px] h-[44px] rounded-[25px] bg-[#E3E3E3] border-0 px-[28px] py-[14px]"
                    type="text"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
                {formik.errors.title && <div className="text-red-500">{formik.errors.title}</div>}
            </div>
            <div className='flex flex-col mb-[12px] text-[#6B6B6B] font-semibold text-lg'>
                <span>Description</span>
                <textarea
                    style={{ resize: "none" }}
                    className="w-full max-w-[644px] h-[160px] rounded-[25px] bg-[#E3E3E3] border-0 px-[28px] py-[24px]"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
                {formik.errors.description && <div className="text-red-500">{formik.errors.description}</div>}
            </div>
            <div className='flex flex-col mb-[12px] text-[#6B6B6B] font-semibold text-lg'>
                <span>Date</span>
                <input value={formik.values.date} className="mt-2 w-[188px] h-[36px] rounded-[25px] bg-[#E3E3E3] px-[14px] " type="date"
                    name="date"
                    placeholder="Date"
                    onChange={formik.handleChange}
                />
                {formik.errors.date && <div className="text-red-500">{formik.errors.date}</div>}
            </div>
            <div>
                <input
                    className="border p-2"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {formik.values.image && <img src={formik.values.image} alt="Preview" className="mt-2" width="200px" />}
                {formik.errors.image && <div className="text-red-500">{formik.errors.image}</div>}
                {formik.values.image && <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    type="submit"
                >
                    {post ? 'Update Post' : 'Add Post'}
                </button>}
            </div>
        </form>
    );
};

export default AddEditPostForm;
