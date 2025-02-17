import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      {/* Phần "Get more opportunities" */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold flex justify-center">Get more opportunities</h1>
      </div>

        {/* Nút "Sign Up with Google" */}
        <div className="mb-6 flex justify-center">
          <Button
            variant="outline"
            className="w-full max-w-xs flex items-center justify-center gap-2 border border-blue-300 hover:bg-gray-50 text-blue-800 font-bold hover:text-blue-900"
          >
            <span>+ Sign Up with Google</span>
          </Button>
        </div>

      {/* Phần "Or sign up with email" */}
      <h1 className="text-sm text-gray-400 mb-6 text-center">
        _____________________ Or sign up with email _____________________
      </h1>

      {/* Form fields */}
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="fullname">
            Full Name
          </label>
          <Input id="fullname" type="text" placeholder="Enter your full name" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <Input id="email" type="email" placeholder="Enter email address" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <Input id="password" type="password" placeholder="Enter password" />
        </div>
        <Button className="w-full">Continue</Button>
      </form>
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="#" className="text-blue-500 font-bold">Login</a>
        </p>
        <p className="mt-4 text-center text-xs text-gray-600">
          By clicking 'Continue', you acknowledge that you have read and accept the
          <a href="#" className="text-blue-500 font-semibold"> Terms of Service</a> and
          <a href="#" className="text-blue-500 font-semibold"> Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};
import { MailOpen } from "lucide-react"
export function ButtonWithIcon() {
  return (
    <Button>
      <MailOpen /> Login with Email
    </Button>
  )
}

export default LoginPage;