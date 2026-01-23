import React from 'react';
import { DesignerNav } from "@/components/DesignerNav";

export default function Upgrade7() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-serif">
      <DesignerNav />
      
      {/* --- BLOCK 1: HERO SUMMARY --- */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 tracking-tight mb-4">
          Not Your Typical Advisor.
        </h1>
        <p className="text-xl md:text-2xl text-blue-900 font-semibold mb-6">
          A CFA Charterholder. A CFP® Professional. 100% Fiduciary.
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Experience elite investment expertise and gold-standard financial planning — all in one advisor.
        </p>
      </section>

      {/* --- BLOCK 2: CREDENTIALS DEEP DIVE --- */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CFA Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 rounded-full">
                {/* Bar Chart Icon */}
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-6"/></svg>
              </div>
              <h2 className="text-2xl font-sans font-bold text-slate-900">The CFA® Charter</h2>
            </div>
            <p className="text-sm font-sans font-bold text-blue-900 mb-4 uppercase tracking-wide">Hard Skills & Rigor</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Global Toughness:</strong> Requires passing 3 sequential 6-hour exams known for low pass rates (historically ~40-50%).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Deep Focus:</strong> Investment analysis, portfolio management, and ethics. We place client interests above our own.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Elite Company:</strong> Fewer than 1 in 25 advisors holds a CFA charter. It is the mark of technical mastery.</span>
              </li>
            </ul>
          </div>

          {/* CFP Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 rounded-full">
                {/* Compass/Map Icon */}
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/></svg>
              </div>
              <h2 className="text-2xl font-sans font-bold text-slate-900">The CFP® Professional</h2>
            </div>
            <p className="text-sm font-sans font-bold text-blue-900 mb-4 uppercase tracking-wide">Holistic Planning & Trust</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>The Gold Standard:</strong> The benchmark for planning. Requires rigorous education, a board exam, and years of experience.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Real Life Application:</strong> Tailored roadmaps for <em>your</em> life (taxes, retirement, estate)—not just managing investments in a vacuum.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Proven Trust:</strong> Roughly 20% of advisors have this. It guarantees proven competence and a pledge to serve you ethically.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- BLOCK 3: AT A GLANCE TABLE --- */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-sans font-bold text-center text-slate-900 mb-10">By The Numbers</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-800 text-sm font-sans uppercase tracking-wider">
                <th className="py-4 text-slate-500 font-medium">Feature</th>
                <th className="py-4 text-slate-500 font-medium">CFA Charterholder</th>
                <th className="py-4 text-slate-500 font-medium">CFP® Professional</th>
                <th className="py-4 text-blue-800 font-extrabold bg-blue-50 px-2">David (You)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-200">
                <td className="py-4 font-bold">Primary Focus</td>
                <td className="py-4">Investment Analysis</td>
                <td className="py-4">Holistic Planning</td>
                <td className="py-4 font-bold text-blue-900 bg-blue-50 px-2">Both</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4 font-bold">Exam Rigor</td>
                <td className="py-4">3 Exams (18 hrs)</td>
                <td className="py-4">1 Board Exam (10 hrs)</td>
                <td className="py-4 font-bold text-blue-900 bg-blue-50 px-2">All Passed</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4 font-bold">Pass Rates</td>
                <td className="py-4">~40-50% (Historic)</td>
                <td className="py-4">~65%</td>
                <td className="py-4 font-bold text-blue-900 bg-blue-50 px-2">Top Tier</td>
              </tr>
              <tr>
                <td className="py-4 font-bold">Market Rarity</td>
                <td className="py-4">&lt; 4% of Advisors</td>
                <td className="py-4">~20% of Advisors</td>
                <td className="py-4 font-bold text-blue-900 bg-blue-50 px-2">The Rare &lt; 1%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-slate-400 mt-4 italic">
          *Both designations require strict adherence to ethical codes and annual continuing education.
        </p>
      </section>

      {/* --- BLOCK 4: THE SYNERGY (Value Prop) --- */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-sans font-bold mb-4">Why settle for either/or?</h2>
          <p className="text-lg text-slate-300">
            You get the rare advisor who blends analytic rigor with comprehensive planning.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="text-center p-6 bg-slate-800 rounded-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <h4 className="font-sans font-bold text-lg mb-2">360° Expertise</h4>
            <p className="text-slate-400 text-sm">From complex investment strategy to life planning. No need for a separate &quot;investment guy&quot; and &quot;planning person.&quot;</p>
          </div>

          {/* Benefit 2 */}
          <div className="text-center p-6 bg-slate-800 rounded-lg">
             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h4 className="font-sans font-bold text-lg mb-2">Higher Fiduciary Standard</h4>
            <p className="text-slate-400 text-sm">Not just a marketing promise; it is embedded in the professional codes we are sworn to follow.</p>
          </div>

           {/* Benefit 3 */}
           <div className="text-center p-6 bg-slate-800 rounded-lg">
             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h4 className="font-sans font-bold text-lg mb-2">Continuous Improvement</h4>
            <p className="text-slate-400 text-sm">We don&apos;t rest on minimum licenses. We stay ahead of the curve with mandatory ongoing education.</p>
          </div>
        </div>
      </section>

      {/* --- BLOCK 5: SOCIAL PROOF & CTA --- */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <blockquote className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-700 italic font-serif mb-12">
          &quot;The difference between advisors with top credentials and those without can be vast. Designations like CFP® or CFA signal a commitment to excellence that every client deserves.&quot;
        </blockquote>

        <div className="flex flex-col items-center gap-4">
          <p className="text-slate-900 font-sans font-bold text-lg">
            Ready for a higher standard of financial advice?
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-sans font-bold py-4 px-8 rounded shadow-lg transition-transform transform hover:-translate-y-1">
            Meet Your Advisor
          </button>
          <p className="text-xs text-slate-500 mt-2">
            No percent-of-assets fee – keep more of your money.
          </p>
        </div>
      </section>

    </div>
  );
}
