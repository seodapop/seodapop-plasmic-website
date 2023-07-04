import { useForm } from 'react-hook-form';
// import ReCAPTCHA from "react-google-recaptcha";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from 'react';
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
const mutation = gql`
  mutation contact($input:contactFormInput!) {
    sendContactForm(input:$input)
}
`

const ContactForm = ({ className = '' }: { className?: string }) => {
  const [sendData, { loading, error }] = useMutation(mutation)
  const [formSuccess, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      message: '',
      phoneNumber: '',
      email: '',
    }
  });
  const onSubmit = async (formData: any, e: any) => {
    await sendData({ variables: { input: { ...formData, data: "" } } })

    reset();
  }
  const inputStyle = 'w-full border-solid border-black border-2 py-2 px-3 h-12 '
  const textAreaStyle = `w-full border-solid border-black border-2 py-2 px-3 h-20`
  const labelStyle = 'text-lg font-bold text-white'
  const errorStyle = 'text-red-700'
  return (
    <div className={`${className} flex flex-col p-5 w-full`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName' className={labelStyle}>First Name</label>
        <input {...register('firstName', { required: true })} placeholder='First Name' className={` ${inputStyle}  ${errors.firstName ? errorStyle : ''}`} />
        <label htmlFor='lastName' className={labelStyle}>Last Name</label>
        <input {...register('lastName', { required: true })} placeholder="Last Name" className={`${inputStyle} ${errors.lastName ? errorStyle : ''}`} />
        <label htmlFor='email' className={labelStyle}>Email</label>
        <input {...register('email', {
          required: "Valid email is required",
          validate: {
            matchPattern: (value: string) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address"
          }
        }
        )} placeholder="info@example.com" className={`${inputStyle} ${errors.email ? errorStyle : ''}`} />
        <label htmlFor='phoneNumber' className={labelStyle}>Phone Number</label>
        <input {...register('phoneNumber', { required: true })} placeholder="111-111-1111" className={`${inputStyle} ${errors.phoneNumber ? errorStyle : ''}`} />
        <label htmlFor='message' className={labelStyle}>Message</label>
        <textarea {...register('message', { required: true })} className={` ${textAreaStyle}  ${errors.message ? errorStyle : ''}`} />
        <input type="submit" className={`py-4 px-8   h-14 text-white ${isSubmitting ? "bg-slate-400" : "bg-blue-400"}`} disabled={isSubmitting ? true : false} />
      </form>
      <div className='flex flex-col justify-center items-center'>
        {formSuccess && <h1 className='text-3xl'>Thank you for your submission</h1>}
      </div>
    </div>
  );
}

export default ContactForm;