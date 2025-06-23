import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from '@inertiajs/react';
import 'react-toastify/dist/ReactToastify.css';
import '../../../css/Login.css';

export default function Login({ status }) {
  const [showPassword, setShowPassword] = useState(false);
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('login'), {
      onSuccess: () => toast.success('Login successful!'),
      onError: (err) => toast.error(err.email || err.password || 'Login failed.'),
    });
  };

  return (
    <>
      <Head title="Login" />
      <section
        className="login-page d-md-flex align-items-center"
        style={{ background: `url('/img/login_bg.webp') no-repeat center / cover` }}
      >
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6 d-flex flex-column justify-content-end align-items-end">
              <div className="login-form">
                <div className='login-title title-2 text-white mt-3'>Login</div>
                <form className='form' onSubmit={handleSubmit}>
                  <input
                    className={`form-control ${errors.email ? 'border border-danger' : ''}`}
                    type="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                  />

                  <div className="position-relative mt-3">
                    <input
                      className={`form-control pe-5 ${errors.password ? 'border border-danger' : ''}`}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={data.password}
                      onChange={(e) => setData('password', e.target.value)}
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y me-3"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </span>
                  </div>

                  <div className='mt-3 d-flex justify-content-between align-items-center'>
                    <label className='text-white text-sm'>
                      <input type="checkbox" /> Remember me
                    </label>
                    <a href="/forgot-password" className='text-white text-sm text-decoration-none'>Forgot Password?</a>
                  </div>

                  <button type="submit" className="pink-btn border-0 mt-4 w-100" disabled={processing}>
                    {processing ? 'Logging in...' : 'Login'}
                  </button>
                </form>

                <div className='mt-3 text-center '>
                  <span className='text-white text-sm'>Don't have an account? </span>
                  <Link href="/register" className="text-sm text-white"> Signup</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </>
  );
}
