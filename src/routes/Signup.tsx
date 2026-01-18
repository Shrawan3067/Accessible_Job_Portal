/**
 * Accessible Signup Page (TSX)
 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, User, Mail, Lock, Eye, EyeOff, Check, X } from 'lucide-react';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Checkbox from '../components/UI/Checkbox';
import { useAuth } from '../context/AuthContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  newsletter: boolean;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { signup, loading, error } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '', agreeToTerms: false, newsletter: true
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);

  const passwordRequirements = [
    { label: 'At least 8 characters', test: (pwd: string) => pwd.length >= 8 },
    { label: 'Contains uppercase letter', test: (pwd: string) => /[A-Z]/.test(pwd) },
    { label: 'Contains lowercase letter', test: (pwd: string) => /[a-z]/.test(pwd) },
    { label: 'Contains number', test: (pwd: string) => /[0-9]/.test(pwd) },
    { label: 'Contains special character', test: (pwd: string) => /[^A-Za-z0-9]/.test(pwd) }
  ];

  const getPasswordStrength = (password: string) => {
    if (!password) return 0;
    const metRequirements = passwordRequirements.filter(req => req.test(password)).length;
    return Math.floor((metRequirements / passwordRequirements.length) * 100);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (getPasswordStrength(formData.password) < 60) {
      newErrors.password = 'Password is too weak';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const result = await signup(formData);
    if (result.success) {
      navigate('/', { replace: true });
    } else {
      setSignupError(result.error || 'Signup failed');
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value } as FormData));
    if (errors[field as string]) setErrors(prev => ({ ...prev, [field]: undefined }));
    if (signupError) setSignupError(null);
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4"><UserPlus className="h-6 w-6 text-white" aria-hidden="true" /></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create your account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">Sign in here</Link></p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div aria-live="polite" aria-atomic="true" className="sr-only">{loading ? 'Creating account...' : ''}</div>

            {(error || signupError) && (
              <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4" role="alert">
                <p className="text-sm text-red-800 dark:text-red-200">{error || signupError}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First name" value={formData.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('firstName', e.target.value)} error={errors.firstName} required autoComplete="given-name" icon={User} placeholder="John" />
              <Input label="Last name" value={formData.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('lastName', e.target.value)} error={errors.lastName} required autoComplete="family-name" placeholder="Doe" />
            </div>

            <Input label="Email address" type="email" value={formData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)} error={errors.email} required autoComplete="email" icon={Mail} placeholder="you@example.com" />

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <div className="relative">
                <Input id="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('password', e.target.value)} error={errors.password} required autoComplete="new-password" className="pr-10" placeholder="Create a strong password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">{showPassword ? <EyeOff className="w-5 h-5" aria-hidden="true" /> : <Eye className="w-5 h-5" aria-hidden="true" />}</button>
              </div>

              {formData.password && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Password strength</span>
                    <span className={`font-medium ${passwordStrength < 40 ? 'text-red-600' : passwordStrength < 80 ? 'text-yellow-600' : 'text-green-600'}`}>{passwordStrength < 40 ? 'Weak' : passwordStrength < 80 ? 'Fair' : 'Strong'}</span>
                  </div>

                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-300 ${passwordStrength < 40 ? 'bg-red-500' : passwordStrength < 80 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: `${passwordStrength}%` }} aria-hidden="true" />
                  </div>

                  <div className="space-y-1 mt-3">
                    {passwordRequirements.map((req, index) => {
                      const isMet = req.test(formData.password);
                      return (
                        <div key={index} className="flex items-center text-xs">
                          {isMet ? <Check className="w-3 h-3 text-green-500 mr-2" aria-hidden="true" /> : <X className="w-3 h-3 text-gray-400 mr-2" aria-hidden="true" />}
                          <span className={isMet ? 'text-green-600' : 'text-gray-500'}>{req.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
              <div className="relative">
                <Input id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('confirmPassword', e.target.value)} error={errors.confirmPassword} required autoComplete="new-password" className="pr-10" placeholder="Confirm your password" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? 'Hide password' : 'Show password'} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">{showConfirmPassword ? <EyeOff className="w-5 h-5" aria-hidden="true" /> : <Eye className="w-5 h-5" aria-hidden="true" />}</button>
              </div>
            </div>

            <div className="space-y-4">
              <Checkbox label={<>I agree to the{' '}<Link to="/terms" className="text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</Link>{' '}and{' '}<Link to="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</Link></>} checked={formData.agreeToTerms} onChange={(checked: boolean) => handleChange('agreeToTerms', checked)} error={errors.agreeToTerms} required />

              <Checkbox label="Subscribe to newsletter for job updates and career tips" checked={formData.newsletter} onChange={(checked: boolean) => handleChange('newsletter', checked)} />
            </div>

            <div>
              <Button type="submit" variant="primary" size="large" loading={loading} disabled={loading} className="w-full" aria-label={loading ? 'Creating account...' : 'Create account'}>{loading ? 'Creating account...' : 'Create account'}</Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300 dark:border-gray-700"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or sign up with</span></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"><span className="sr-only">Sign up with Google</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg></button>
              <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"><span className="sr-only">Sign up with LinkedIn</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
