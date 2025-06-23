import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import images from '@/helper/Images';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from '@inertiajs/react';
import 'react-toastify/dist/ReactToastify.css';
import '../../../css/Login.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { first_name, last_name, email, password, password_confirmation } = formData;

    if (!first_name || !last_name) {
      toast.error('Please enter your first and last name');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!password || password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }

    if (password !== password_confirmation) {
      toast.error('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    router.post('/register', formData, {
      onSuccess: () => {
        toast.success('Signup successful!');
      },
      onError: (errors) => {
        const messages = Object.values(errors).flat().join('\n');
        toast.error(messages || 'Signup failed.');
      },
    });
  };

  return (
    <>
      <Head title="Sign Up" />
      <section
        className="login-page d-flex align-items-center"
        style={{ background: `url(${images['login_bg.webp']}) no-repeat center / cover` }}
      >
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6 d-flex flex-column justify-content-end align-items-end">
              <div className="login-form">
                <form onSubmit={handleSubmit}>
                  <h2 className="login-title title-2 text-white mt-3">Sign Up</h2>

                  <div className="mb-4">
                    <input
                      name="first_name"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      name="last_name"
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4 position-relative">
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y me-3"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: 'pointer' }}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </span>
                  </div>

                  <div className="mb-4 position-relative">
                    <input
                      name="password_confirmation"
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="form-control"
                      placeholder="Confirm Password"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y me-3"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{ cursor: 'pointer' }}
                    >
                      {showConfirmPassword ? '🙈' : '👁️'}
                    </span>
                  </div>

                  <div className="mb-4 d-flex align-items-center">
                    <input id="terms" type="checkbox" className="me-2" />
                    <label htmlFor="terms" className="text-white text-sm">
                      By signing up you agree to our Terms and conditions
                    </label>
                  </div>

                  <button type="submit" className="pink-btn border-0 mt-3 w-100">
                    Create Account
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <span className="text-sm text-white">
                    Already have an account?{' '}
                     <Link href="/login" className="text-sm text-white"> Login</Link>
                  </span>
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
