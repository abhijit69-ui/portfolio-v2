import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { fadeUp } from '../lib/animations';
import SectionHeader from './SectionHeader';

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    console.log(values);

    // simulate API call
    await new Promise((res) => setTimeout(res, 1000));

    reset();
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='contact'
    >
      <SectionHeader
        title='Let’s Build Something Together'
        subtitle='Contact'
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full text-base-content max-w-4xl mx-auto space-y-6 mt-10'
      >
        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Name */}
          <div className='form-control'>
            <label className='label'>Name</label>
            <input
              type='text'
              placeholder='Your name'
              className='input input-bordered w-full'
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name is too short',
                },
              })}
            />
            {errors.name && (
              <span className='text-sm'>{errors.name.message}</span>
            )}
          </div>

          {/* Company */}
          <div className='form-control'>
            <label className='label'>Company</label>
            <input
              type='text'
              placeholder='Company name'
              className='input input-bordered w-full'
              {...register('company')}
            />
          </div>

          {/* Email */}
          <div className='form-control'>
            <label className='label'>Email</label>
            <input
              type='email'
              placeholder='you@example.com'
              className='input input-bordered w-full'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email',
                },
              })}
            />
            {errors.email && (
              <span className='text-sm'>{errors.email.message}</span>
            )}
          </div>

          {/* Phone */}
          <div className='form-control'>
            <label className='label'>Phone</label>
            <input
              type='tel'
              placeholder='+1234567890'
              className='input input-bordered font-mono w-full'
              {...register('phone', {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Enter valid phone number',
                },
              })}
            />
          </div>
        </div>

        {/* Message */}
        <div className='form-control'>
          <label className='label'>Message</label>
          <textarea
            className='textarea textarea-bordered w-full h-36 resize-none'
            {...register('message', {
              required: 'Message is required',
            })}
          />
          {errors.message && (
            <span className='text-sm'>{errors.message.message}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type='submit'
          className='btn btn-primary w-full md:w-auto'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
}
