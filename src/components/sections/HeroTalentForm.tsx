"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Users,
  Briefcase,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  PhoneCall,
  UploadCloud,
  FileText,
  Trash2,
} from "lucide-react";

export function HeroTalentForm() {
  const [activeTab, setActiveTab] = useState<"employer" | "candidate">("employer");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [roleType, setRoleType] = useState("Legal & Law Firms");
  const [urgency, setUrgency] = useState("Immediate (< 14 days)");
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Candidate Form State
  const [candidateTitle, setCandidateTitle] = useState("");
  const [candidateExperience, setCandidateExperience] = useState("Senior (6-10 yrs)");
  const [candidateLinkedin, setCandidateLinkedin] = useState("");
  const [resumeFile, setResumeFile] = useState<{ name: string; size: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setResumeFile({ name: file.name, size: `${sizeMb} MB` });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCompanyName("");
    setName("");
    setEmail("");
    setPhone("");
    setCandidateTitle("");
    setCandidateLinkedin("");
  };

  return (
    <div
      id="hero-talent-form"
      className="w-full bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 transition-all duration-300"
    >
      {/* Dual Tab Header */}
      <div className="grid grid-cols-2 bg-slate-100/80 p-1.5 border-b border-slate-200/80">
        <button
          type="button"
          onClick={() => {
            setActiveTab("employer");
            setIsSubmitted(false);
          }}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "employer"
              ? "bg-[#001749] text-white shadow-md shadow-[#001749]/20"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <Briefcase className={`w-4 h-4 ${activeTab === "employer" ? "text-[#D4AF37]" : "text-slate-400"}`} />
          <span>I Need To Hire</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("candidate");
            setIsSubmitted(false);
          }}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "candidate"
              ? "bg-[#001749] text-white shadow-md shadow-[#001749]/20"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <Users className={`w-4 h-4 ${activeTab === "candidate" ? "text-[#D4AF37]" : "text-slate-400"}`} />
          <span>I Am Seeking a Role</span>
        </button>
      </div>

      {/* Form Body */}
      <div className="p-5 sm:p-7">
        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001749]">Request Received Successfully</h3>
              <p className="text-slate-600 text-sm mt-1 max-w-sm mx-auto">
                {activeTab === "employer"
                  ? "A Senior Placement Partner has been assigned to your search. We will review talent availability and contact you within 2 business hours."
                  : "Your confidential profile is in our secure talent repository. A specialized recruiter in your discipline will reach out for a confidential consultation."}
              </p>
            </div>

            <div className="pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs text-slate-500 max-w-xs mx-auto text-left space-y-1">
                <p className="font-semibold text-slate-800">Need immediate answers?</p>
                <p>Call our executive desk directly at:</p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="font-bold text-[#001749] hover:underline flex items-center gap-1.5 pt-1"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline transition-colors pt-2"
            >
              Submit another request
            </button>
          </div>
        ) : activeTab === "employer" ? (
          /* Employer Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Rapid Talent Matching
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold border border-emerald-200/50 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Vetted Profiles On Standby
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Practice / Industry *</label>
                <select
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                >
                  <option value="Legal & Law Firms">Legal & Law Firms</option>
                  <option value="Healthcare & Clinical">Healthcare & Clinical</option>
                  <option value="Technology & IT">Technology & IT</option>
                  <option value="Finance & Accounting">Finance & Accounting</option>
                  <option value="Construction & Real Estate">Construction & Real Estate</option>
                  <option value="Executive & C-Suite">Executive & C-Suite</option>
                  <option value="Sales & Operations">Sales & Operations</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Timeline *</label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                >
                  <option value="Immediate (< 14 days)">Immediate (&lt; 14 days)</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="30 - 60 Days">30 - 60 Days</option>
                  <option value="Pipeline Building">Pipeline Building / Confidential</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Health Partners"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name & Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins, VP Talent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Direct Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D4AF37] shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {isSubmitting ? (
                <span>Searching Talent Matrix...</span>
              ) : (
                <>
                  <span>Request Candidate Shortlist</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                90-Day Warranty
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#001749]" />
                Zero Upfront Cost
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Top 5% Talent
              </span>
            </div>
          </form>
        ) : (
          /* Candidate Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Confidential Career Representation
              </span>
              <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full font-semibold border border-blue-200/50 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                100% Confidential
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Current / Target Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Commercial Counsel"
                  value={candidateTitle}
                  onChange={(e) => setCandidateTitle(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Experience Level *</label>
                <select
                  value={candidateExperience}
                  onChange={(e) => setCandidateExperience(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                >
                  <option value="Mid-Level (3-5 yrs)">Mid-Level (3-5 yrs)</option>
                  <option value="Senior (6-10 yrs)">Senior (6-10 yrs)</option>
                  <option value="Director / VP (10-15 yrs)">Director / VP (10-15 yrs)</option>
                  <option value="Executive / Partner (15+ yrs)">Executive / Partner (15+ yrs)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Michael Ross"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Confidential Email *</label>
                <input
                  type="email"
                  required
                  placeholder="personal@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn Profile URL</label>
                <input
                  type="url"
                  placeholder="linkedin.com/in/yourprofile"
                  value={candidateLinkedin}
                  onChange={(e) => setCandidateLinkedin(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20 focus:border-[#1E5CD9] transition-all"
                />
              </div>
            </div>

            {/* Resume Upload Dropzone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Attach Resume / Executive CV (Optional)
              </label>
              {resumeFile ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold truncate">
                    <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">{resumeFile.name}</span>
                    <span className="text-[10px] text-emerald-600 font-normal">({resumeFile.size})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setResumeFile(null)}
                    className="text-slate-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                    aria-label="Remove file"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-slate-300 hover:border-[#1E5CD9] bg-slate-50/50 hover:bg-blue-50/30 transition-all cursor-pointer text-xs text-slate-500 hover:text-[#001749]">
                  <UploadCloud className="w-4 h-4 text-[#1E5CD9]" />
                  <span>Upload PDF or DOCX (Max 10MB)</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#001749] hover:bg-[#0A2566] shadow-lg shadow-[#001749]/25 hover:shadow-[#001749]/40 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {isSubmitting ? (
                <span>Submitting Profile Securely...</span>
              ) : (
                <>
                  <span>Submit Confidential Profile</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                Never contacts employer
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                100% Free For Candidates
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
