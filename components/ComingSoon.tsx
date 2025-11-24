import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // Simulate network delay for better UX
    setTimeout(() => {
      if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        setIsSubmitting(false);
        return;
      }

      try {
        const existingEmailsStr = localStorage.getItem('collected_emails');
        const existingEmails: string[] = existingEmailsStr ? JSON.parse(existingEmailsStr) : [];
        
        if (!existingEmails.includes(email)) {
          existingEmails.push(email);
          localStorage.setItem('collected_emails', JSON.stringify(existingEmails));
        }
        
        setIsSuccess(true);
        setEmail('');
      } catch (err) {
        setError('Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }, 800);
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center animate-fade-in w-full h-full">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-slide-up">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
        <p className="text-slate-400 mb-8 max-w-xs mx-auto">
          Thanks for joining. We'll notify you when we're ready.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="px-6 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors"
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center animate-slide-up w-full">
      {/* Header specifically requested as "Coming Soon" */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
        Coming Soon
      </h1>
      
      <p className="text-base text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
        We are crafting a new experience. Join the waitlist to get early access.
      </p>

      <form onSubmit={handleSubmit} className="w-full relative group space-y-4">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-11 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-lg text-base"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white rounded-2xl font-semibold transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/25"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <span className="flex items-center">
              Join Waitlist <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          )}
        </button>
        
        {error && (
          <p className="text-sm text-red-400 animate-fade-in mt-2">
             {error}
          </p>
        )}
      </form>
    </div>
  );
};