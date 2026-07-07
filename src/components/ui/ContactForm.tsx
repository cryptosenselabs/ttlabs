import React from 'react';

export const ContactForm = () => {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-[14px] font-semibold text-[#0F172A] mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[#0F172A] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-400" 
            placeholder="e.g. Jane Doe" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[14px] font-semibold text-[#0F172A] mb-2">Email Address</label>
          <input 
            type="email" 
            id="email" 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[#0F172A] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-400" 
            placeholder="jane@example.com" 
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-[14px] font-semibold text-[#0F172A] mb-2">Company or Project</label>
        <input 
          type="text" 
          id="company" 
          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[#0F172A] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-400" 
          placeholder="e.g. Acme Software" 
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[14px] font-semibold text-[#0F172A] mb-2">Project Details</label>
        <textarea 
          id="message" 
          rows={5} 
          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[#0F172A] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-400 resize-none" 
          placeholder="Tell us about the problem you are solving..."
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transform duration-200"
      >
        Submit Inquiry
      </button>
    </form>
  );
};
