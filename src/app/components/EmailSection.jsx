'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedInIcon from '../../../public/linkedin-icon.svg';

const EmailSection = () => {
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        const payload = {
            name: formData.get('from_name'),
            email: formData.get('reply_to'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Request failed');

            setStatus('sent');
            e.target.reset();
        } catch (error) {
            console.error('Failed to send message:', error);
            setStatus('error');
        }
    };

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
            <div className='z-9'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I&apos;m open to exploring new professional opportunities and collaborations. Whether you have a project proposal, a question, or simply want to network, feel free to reach out. I&apos;ll respond as promptly as possible, and I look forward to building meaningful connections!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://github.com/ardiwirya' target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt='Github Icon'/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/ardiwiryaindarto/' target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedInIcon} alt='LinkedIn Icon'/>
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='from_name' className='text-white block mb-2 text-sm font-medium'>
                            Your Name
                        </label>
                        <input 
                            name='from_name'
                            type='text' 
                            id='from_name' 
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='John Doe'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='reply_to' className='text-white block mb-2 text-sm font-medium'>
                            Your E-mail
                        </label>
                        <input 
                            name='reply_to'
                            type='email' 
                            id='email' 
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='john.doe@company.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input 
                            name='subject'
                            type='text' 
                            id='subject' 
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Discussion on Software Development Collaboration...'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={status === 'sending'}
                        className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-50'>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'sent' && (
                        <p className='text-secondary-500 text-sm mt-2'>
                            Message sent successfully! I&apos;ll get back to you soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className='text-red-400 text-sm mt-2'>
                            Something went wrong. Please try again or email me directly at{' '}
                            <a href='mailto:ardiwiryaindarto1@gmail.com' className='underline'>
                                ardiwiryaindarto1@gmail.com
                            </a>.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
