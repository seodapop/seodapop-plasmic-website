import { useForm } from 'react-hook-form';
// import ReCAPTCHA from "react-google-recaptcha";
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import { useEffect } from 'react';
/*
company name
current website url
budget:
  - under 1000
  - 1000-5000
  - 5000-10000
  - over 10000
I am looking for:
  - SEO
  - PPC
  - Social Media
  - Web Design
  - Web Development
  - Other
*/


const ContactForm = ({ className = '' }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      message: '',
      phoneNumber: '',
      email: '',
    }
  });
  useEffect(() => { test() }, [])
  const test = async () => {
    const { data, error, loading } = await client.query({
      query: gql` {
        getAllOptions(limit: 10, offset: 1) {
        key
        value
        }
      }
    `,
    });
    console.log(data, error, loading);
  }
  const onSubmit = async (data: any, e: any) => {
    console.log(data);
  }
  const inputStyle = 'w-full border-solid border-black border-2 py-2 px-3 h-12 '
  const textAreaStyle = `w-full border-solid border-black border-2 py-2 px-3 h-20`
  const errorStyle = 'text-red-700'
  return (
    <div className={`${className} flex flex-col p-5 w-full`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'>First Name</label>
        <input {...register('firstName', { required: true })} placeholder='First Name' className={` ${inputStyle}  ${errors.firstName ? errorStyle : ''}`} />
        <label htmlFor='lastName'>Last Name</label>
        <input {...register('lastName', { required: true })} placeholder="Last Name" className={`${inputStyle} ${errors.lastName ? errorStyle : ''}`} />
        <label htmlFor='email'>Email</label>
        <input {...register('email', {
          required: "Valid email is required",
          validate: {
            matchPattern: (value: string) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address"
          }
        }
        )} placeholder="info@example.com" className={`${inputStyle} ${errors.email ? errorStyle : ''}`} />
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input {...register('phoneNumber', { required: true })} placeholder="111-111-1111" className={`${inputStyle} ${errors.phoneNumber ? errorStyle : ''}`} />
        <label htmlFor='message'>Message</label>
        <textarea {...register('message', { required: true })} className={` ${textAreaStyle}  ${errors.message ? errorStyle : ''}`} />
        <input type="submit" className='py-4 px-8  bg-blue-400 h-14' />
      </form>
    </div>
  );
}

export default ContactForm;