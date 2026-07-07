import React from 'react';

export const ContactForm = () => {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors" 
          placeholder="Jane Doe" 
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors" 
          placeholder="jane@example.com" 
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-600 mb-1">Company or Project</label>
        <input 
          type="text" 
          id="company" 
          className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors" 
          placeholder="Your Organization" 
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1">Message</label>
        <textarea 
          id="message" 
          rows={5} 
          className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors" 
          placeholder="How can we help?"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-slate-900 text-white font-semibold py-3 px-4 rounded-md hover:bg-slate-800 transition-colors mt-2 shadow-sm"
      >
        Submit Inquiry
      </button>
    </form>
  );
};
