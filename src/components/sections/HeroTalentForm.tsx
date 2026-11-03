"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Users,
  Briefcase,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  PhoneCall,
  UploadCloud,
  FileText,
  Trash2,
} from "lucide-react";

export function HeroTalentForm() {
  const [activeTab, setActiveTab] = useState<"employer" | "candidate">("employer");
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Employer Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [roleType, setRoleType] = useState("Legal & Law Firms");
  const [urgency, setUrgency] = useState("Immediate (< 14 days)");
  const [notes, setNotes] = useState("");

  // Candidate Form State
  const [candidateTitle, setCandidateTitle] = useState("");
  const [candidateExperience, setCandidateExperience] = useState("Senior (6-10 yrs)");
  const [resumeFile, setResumeFile] = useState<{ name: string; size: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setResumeFile({ name: file.name, size: `${sizeMb} MB` });
    }
  };

  const handleStep1Continue = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && phone) {
      setStep(2);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setName("");
    setEmail("");
    setPhone("");
    setCompanyName("");
    setNotes("");
    setResumeFile(null);
  };

  return (
    <div id="hero-form-card" className="w-full lg:col-span-5 scroll-mt-28 justify-end pt-4 lg:pt-0">
      <div className="bg-[#FAF8F5] text-slate-900 rounded-[28px] p-6 sm:p-9 shadow-2xl border-2 border-[#EAB308]/40 relative w-full max-w-[480px] ml-auto overflow-hidden">
        
        {/* Subtle Warm Accent Flare */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#EAB308]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Tab Switcher: Employer vs Candidate */}
        <div className="grid grid-cols-2 p-1 bg-slate-200/70 rounded-xl mb-5 relative z-10">
          <button
            type="button"
            onClick={() => {
              setActiveTab("employer");
              setStep(1);
            }}
            className={`py-2 px-3 text-xs sm:text-sm font-sans font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "employer"
                ? "bg-[#021124] text-white shadow-sm"
                : "text-slate-700 hover:text-[#021124]"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>I Need To Hire</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("candidate");
              setStep(1);
            }}
            className={`py-2 px-3 text-xs sm:text-sm font-sans font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "candidate"
                ? "bg-[#021124] text-white shadow-sm"
                : "text-slate-700 hover:text-[#021124]"
            }`}
          >
            <Users className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>I Seek A Role</span>
          </button>
        </div>

        {/* Form Title & Privacy Tag */}
        <div className="relative z-10 mb-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#021124] font-normal leading-tight">
            {activeTab === "employer" ? (
              <>
                Request Candidate <span className="italic font-normal text-[#EAB308]">Shortlist</span>
              </>
            ) : (
              <>
                Submit Confidential <span className="italic font-normal text-[#EAB308]">Profile</span>
              </>
            )}
          </h2>
          <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-1 font-sans">
            <Lock className="w-3.5 h-3.5 text-[#EAB308] shrink-0" />
            <span>Strict NDA confidentiality. Direct partner review.</span>
          </p>
        </div>

        {/* 2-Step Progress Indicator */}
        {!isSubmitted && (
          <div className="mb-5 relative z-10">
            <div className="flex justify-between items-center text-[11px] font-sans font-extrabold uppercase tracking-wider text-[#021124] mb-1.5">
              <span>Step {step} of 2: {step === 1 ? "Contact Details" : "Role Specifications"}</span>
              <span className="text-[#EAB308] font-bold">{step === 1 ? "50%" : "100%"}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#EAB308] transition-all duration-300 ease-out"
                style={{ width: step === 1 ? "50%" : "100%" }}
              />
            </div>
          </div>
        )}

        {/* Success State */}
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 font-sans relative z-10">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border-2 border-emerald-400">
              ✓
            </div>
            <h3 className="text-2xl font-serif text-[#021124]">
              {activeTab === "employer" ? "Requisition Received" : "Profile Submitted"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-bold text-slate-900">{name || "Partner"}</span>. Our managing partners will review your requirements and reach out within 2 business hours.
            </p>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 max-w-xs mx-auto">
              Direct Desk Hotline: <strong className="text-[#021124]">(201) 572-9538</strong>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-bold text-[#021124] hover:text-[#EAB308] underline transition-colors pt-2 cursor-pointer block mx-auto"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          /* Active Form */
          <form
            onSubmit={step === 1 ? handleStep1Continue : handleFinalSubmit}
            className="space-y-3.5 sm:space-y-4 font-sans text-left relative z-10"
          >
            {step === 1 ? (
              /* STEP 1: Basic Contact Info */
              <>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 focus:border-[#021124] focus:ring-2 focus:ring-[#021124]/15 outline-none text-sm text-slate-900 transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 focus:border-[#021124] focus:ring-2 focus:ring-[#021124]/15 outline-none text-sm text-slate-900 transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(201) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 focus:border-[#021124] focus:ring-2 focus:ring-[#021124]/15 outline-none text-sm text-slate-900 transition-all bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-[#021124] text-white hover:bg-[#EAB308] hover:text-[#021124] font-sans font-extrabold text-sm sm:text-base py-3 sm:py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4 text-[#EAB308] group-hover:text-[#021124] group-hover:translate-x-1 transition-all" />
                </button>
              </>
            ) : (
              /* STEP 2: Role Details / Specifications */
              <>
                {activeTab === "employer" ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Health Partners / Law Firm"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 focus:border-[#021124] focus:ring-2 focus:ring-[#021124]/15 outline-none text-sm text-slate-900 transition-all bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                          Practice Area *
                        </label>
                        <select
                          value={roleType}
                          onChange={(e) => setRoleType(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#021124] outline-none text-xs sm:text-sm text-slate-900 bg-white"
                        >
                          <option value="Legal & Law Firms">Legal & Law</option>
                          <option value="Healthcare & Clinical">Healthcare</option>
                          <option value="Technology & IT">Technology</option>
                          <option value="Finance & Accounting">Finance</option>
                          <option value="Construction & Real Estate">Construction</option>
                          <option value="Executive & C-Suite">C-Suite</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                          Timeline *
                        </label>
                        <select
                          value={urgency}
                          onChange={(e) => setUrgency(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#021124] outline-none text-xs sm:text-sm text-slate-900 bg-white"
                        >
                          <option value="Immediate (< 14 days)">Immediate</option>
                          <option value="Within 30 Days">30 Days</option>
                          <option value="30 - 60 Days">60 Days</option>
                          <option value="Confidential Pipeline">Confidential</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                        Role Requirements / Target Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Litigation Partner, Chief Medical Officer, VP Eng"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#021124] focus:ring-2 focus:ring-[#021124]/15 outline-none text-xs sm:text-sm text-slate-900 transition-all bg-white"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                        Current / Target Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Senior Commercial Litigation Counsel"
                        value={candidateTitle}
                        onChange={(e) => setCandidateTitle(e.target.value)}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 focus:border-[#021124] focus:ring-2 focus:ring-[#021124]/15 outline-none text-sm text-slate-900 transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                        Seniority Level *
                      </label>
                      <select
                        value={candidateExperience}
                        onChange={(e) => setCandidateExperience(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#021124] outline-none text-xs sm:text-sm text-slate-900 bg-white"
                      >
                        <option value="Mid-Level (3-5 yrs)">Mid-Level (3-5 yrs)</option>
                        <option value="Senior (6-10 yrs)">Senior (6-10 yrs)</option>
                        <option value="Director / VP (10-15 yrs)">Director / VP (10-15 yrs)</option>
                        <option value="Executive / Partner (15+ yrs)">Executive / Partner (15+ yrs)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                        Attach Resume / Executive CV (Optional)
                      </label>
                      {resumeFile ? (
                        <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
                          <div className="flex items-center gap-1.5 truncate">
                            <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="truncate">{resumeFile.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setResumeFile(null)}
                            className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <label className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-dashed border-slate-300 hover:border-[#021124] bg-white text-xs text-slate-500 hover:text-[#021124] cursor-pointer transition-colors">
                          <UploadCloud className="w-4 h-4 text-[#EAB308]" />
                          <span>Upload PDF or Word CV (Max 10MB)</span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </>
                )}

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm py-3 rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 bg-[#021124] text-white hover:bg-[#EAB308] hover:text-[#021124] font-extrabold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <span>{activeTab === "employer" ? "Get Shortlist ✓" : "Submit Profile ✓"}</span>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
