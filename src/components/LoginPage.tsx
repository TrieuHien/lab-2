import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  // State management
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  // Handle field blur for validation
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name: string, value: string) => {
    let errorMessage = '';
    
    if (!value.trim()) {
      errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = 'Please enter a valid email address';
    } else if (name === 'password' && value.length < 6) {
      errorMessage = 'Password must be at least 6 characters long';
    }

    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Touch all fields to trigger validation
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched as typeof touched);

    // Validate all fields
    let hasErrors = false;
    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
      if (!value.trim()) hasErrors = true;
    });

    if (!hasErrors) {
      console.log('Form submitted:', formData);
      // Handle form submission logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            {isLogin ? 'Welcome Back' : 'Get more opportunities'}
          </h1>
        </div>

        <div className="mb-6 flex justify-center">
          <Button
            variant="outline"
            className="w-full max-w-xs flex items-center justify-center gap-2 border border-blue-300 hover:bg-gray-50 text-blue-800 font-bold hover:text-blue-900"
          >
            {isLogin ? '+ Login with Google' : '+ Sign Up with Google'}
          </Button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or {isLogin ? 'login' : 'sign up'} with email
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && touched.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
          )}

          <div className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            {isLogin ? 'Login' : 'Continue'}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 font-bold hover:text-blue-700"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>

        {!isLogin && (
          <p className="mt-4 text-center text-xs text-gray-600">
            By clicking 'Continue', you acknowledge that you have read and accept the
            <a href="#" className="text-blue-500 font-semibold"> Terms of Service</a> and
            <a href="#" className="text-blue-500 font-semibold"> Privacy Policy</a>.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;