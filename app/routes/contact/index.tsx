import type { Route } from './+types';
import { Form } from 'react-router';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const errors: Record<string, string> = {};

  if (!name) errors.name = 'Name is required';
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email';
  }
  if (!message) errors.message = 'Message is required';

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const data = {
    name,
    email,
    message,
  };

  return {
    message: 'Message sent successfully',
    data,
  };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {};
  return (
    <>
      <div className='max-w-2xl mx-auto mt-12 px-6 py-8 bg-gray-900'>
        <h2 className='text-3xl font-bold text-center mb-8'>Contact Me 📩</h2>

        <Form method='post' className='space-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-300 mb-1'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your full name'
              className='w-full mt-1 px-4 py-2 border border-gray-700 text-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent rounded-md transition duration-200'
            />
            {errors.name && (
              <p className='text-red-400 text-sm mt-1'>{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-300 mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              className='w-full mt-1 px-4 py-2 border border-gray-700 text-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent rounded-md transition duration-200'
            />
            {errors.email && (
              <p className='text-red-400 text-sm mt-1'>{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-300 mb-1'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Enter your message'
              className='w-full mt-1 px-4 py-2 border border-gray-700
            text-gray-300 text-sm focus:outline-none focus:ring-1
            focus:ring-purple-600 focus:border-transparent rounded-md transition
            duration-200 resize-y'></textarea>
            {errors.message && (
              <p className='text-red-400 text-sm mt-1'>{errors.message}</p>
            )}
          </div>
          <button className='w-full bg-purple-500 hover:bg-purple-600 text-white text-md font-semibold py-2 px-4 rounded cursor-pointer transition-colors duration-300'>
            Send Message
          </button>
        </Form>
      </div>
      {actionData?.message && (
        <div className='max-w-2xl mx-auto mt-8 px-6 py-4 bg-green-700 text-white text-center'>
          {actionData.message}
        </div>
      )}
    </>
  );
};

export default ContactPage;
