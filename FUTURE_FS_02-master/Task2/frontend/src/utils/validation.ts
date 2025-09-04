export interface ValidationErrors {
  [key: string]: string;
}

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return null;
};

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || value.trim() === '') return `${fieldName} is required`;
  return null;
};

export const validateZipCode = (zipCode: string): string | null => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  if (!zipCode) return 'ZIP code is required';
  if (!zipRegex.test(zipCode)) return 'Please enter a valid ZIP code';
  return null;
};