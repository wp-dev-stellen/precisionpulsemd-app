import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import images from '../../helper/Images'; // You can replace with your own image

export default function NotFound() {
  return (
    <GuestLayout>
      <Head title="Page Not Found" />

      <div className="container text-center space-80 bg-white">
            <img src={images['404.webp']} className='mt-5' alt="Not Found" />
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="pink-btn mt-3">
                Go to Home
            </Link>
    </div>
    </GuestLayout>
  );
}
