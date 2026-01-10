'use client';

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Fill,
  ArcElement
} from 'chart.js';
import { Line, Scatter } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
import Plot from 'react-plotly.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Fill,
  ArcElement,
  annotationPlugin
);

// --- VISUAL 1: FEE CHART COMPONENT ---
const FeeChart = () => {
  const years = Array.from({ length: 21 }, (_, i) => `Year ${i}`);
  const initialPrincipal = 1000000;
  const growthRate = 0.08;
  const feeRate = 0.01;

  const noFeeData = [];
  const withFeeData = [];

  let pNoFee = initialPrincipal;
  let pWithFee = initialPrincipal;

  for (let i = 0; i <= 20; i++) {
    noFeeData.push(pNoFee);
    withFeeData.push(pWithFee);
    pNoFee = pNoFee * (1 + growthRate);
    pWithFee = pWithFee * (1 + growthRate) * (1 - feeRate);
  }

  const gap = noFeeData[1] - withFeeData[1];

  const data = {
    labels: years,
    datasets: [],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: (ctx: any) => `$${(ctx.raw / 1000000).toFixed(2)}M`
        }
      },
      annotation: {
        annotations: {
          gapLabel: {
            type: 'label' as const,
            xValue: 19,
            yValue: (noFeeData[1] + withFeeData[1]) / 2,
            content: [],
            color: '#D93025',
            font: { size: 14, weight: 'bold' as const },
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#FAD2CF'
          }
        }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { maxTicksLimit: 6 } },
      y: { position: 'right' as const, ticks: { callback: (v: any) => `$${v/1000000}M` } }
    }
  };

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Line data={data} options={options} />
      <div className="flex flex-wrap gap-4 mt-4 text-sm justify-center">
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#34A853]"></span>Potential (No Fee)</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#4285F4]"></span>Realized (1% Fee)</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm border border-red-200 bg-"></span>Lost to Fees</div>
      </div>
    </div>
  );
};

// --- VISUAL 2: CFA FUNNEL COMPONENT ---
const CFAFunnel = () => {
    // Note: In a real app, ensure Plotly is loaded only on client side
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    if (!isClient) return <div className="h-[400px] w-full bg-neutral-100 animate-pulse" />;

    return (
      <Plot
        data={[{
          type: 'funnel',
          y: ["Enrolled Candidates", "Passed Level I", "Passed Level II", "Charter Awarded"],
          x: [],
          textinfo: "value+percent initial",
          textposition: "inside",
          text: [],
          marker: { color: [] },
          connector: { line: { color: "#C4C7C5", dash: "dot", width: 1 } }
        }]}
        layout={{
          margin: { l: 140, r: 20, t: 20, b: 20 },
          font: { family: "inherit", size: 13 },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          showlegend: false,
          funnelmode: "stack",
          height: 400,
          autosize: true
        }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
        config={{ displayModeBar: false }}
      />
    );
};

// --- VISUAL 3: ADVISOR MATRIX COMPONENT ---
const AdvisorMatrix = () => {
  const entities = [];

  const data = {
    datasets: []
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => ctx.raw.desc,
          title: (ctx: any) => ctx.raw.label
        }
      },
      annotation: {
        annotations: {
          lineX: { type: 'line' as const, scaleID: 'x', value: 5, borderColor: '#C4C7C5', borderWidth: 1, borderDash: [6, 6] },
          lineY: { type: 'line' as const, scaleID: 'y', value: 5, borderColor: '#C4C7C5', borderWidth: 1, borderDash: [6, 6] },
          labelTR: { type: 'label' as const, xValue: 7.5, yValue: 9.5, content: [], color: '#1A73E8', font: { weight: 'bold' as const } },
          labelTL: { type: 'label' as const, xValue: 2.5, yValue: 9.5, content: [], color: '#999', font: { size: 12 } },
          labelBR: { type: 'label' as const, xValue: 7.5, yValue: 0.5, content: [], color: '#999', font: { size: 12 } },
          boxTR: { type: 'box' as const, xMin: 5, xMax: 10, yMin: 5, yMax: 10, backgroundColor: 'rgba(26, 115, 232, 0.04)', borderWidth: 0 }
        }
      }
    },
    scales: {
      x: { 
        min: 0, max: 10, 
        grid: { display: false }, 
        ticks: { display: false },
        title: { display: true, text: 'Holistic Planning Focus →', font: { weight: 'bold' as const } }
      },
      y: { 
        min: 0, max: 10, 
        grid: { display: false }, 
        ticks: { display: false },
        title: { display: true, text: 'Investment Rigor →', font: { weight: 'bold' as const } }
      }
    }
  };

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Scatter data={data} options={options} />
    </div>
  );
};

// --- VISUAL 4: SCORECARD COMPONENT ---
const Scorecard = () => (
  <div className="w-full overflow-hidden border border-neutral-200 rounded-lg shadow-sm">
    <div className="grid grid-cols-[1fr_1.2fr_1.2fr] text-sm md:text-base">
      {/* Header */}
      <div className="p-4 font-bold text-neutral-600 border-b bg-neutral-50 flex items-end">FEATURE</div>
      <div className="p-4 font-bold text-neutral-600 border-b bg-neutral-50 flex flex-col justify-end">
        BROKER/DEALER <span className="text-xs font-normal opacity-70">(Industry Norm)</span>
      </div>
      <div className="p-4 font-bold text-green-700 border-b border-green-200 bg-green-50 flex flex-col justify-end">
        TRUE FIDUCIARY <span className="text-xs font-normal opacity-70 text-neutral-600">(Our Standard)</span>
      </div>

      {/* Row 1 */}
      <div className="p-4 border-b border-neutral-100 font-medium">Legal Standard</div>
      <div className="p-4 border-b border-neutral-100 flex items-center gap-2">
        <span className="text-red-500">✕</span> Suitability <span className="text-xs opacity-50">(Good enough)</span>
      </div>
      <div className="p-4 border-b border-green-200 bg-green-50/50 flex items-center gap-2 font-medium">
        <span className="text-green-600">✓</span> Fiduciary <span className="text-xs opacity-75">(Best Interest)</span>
      </div>

      {/* Row 2 */}
      <div className="p-4 border-b border-neutral-100 font-medium">Compensation</div>
      <div className="p-4 border-b border-neutral-100">Commissions & % Fees</div>
      <div className="p-4 border-b border-green-200 bg-green-50/50 font-medium">Flat Fee Only</div>

      {/* Row 3 */}
      <div className="p-4 border-b border-neutral-100 font-medium">Products</div>
      <div className="p-4 border-b border-neutral-100">Proprietary / Incentivized</div>
      <div className="p-4 border-b border-green-200 bg-green-50/50 font-medium">Entire Market</div>

      {/* Row 4 */}
      <div className="p-4 font-medium">Conflicts</div>
      <div className="p-4">Buried in fine print</div>
      <div className="p-4 bg-green-50/50 font-medium">Open & Transparent</div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function Upgrade5() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION: The Manifesto */}
      <section className="relative px-6 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 rounded-full blur-3xl" />
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          We Answer to One Person.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          It isn’t a sales manager, a fund provider, or a shareholder.<br />
          <span className="font-semibold text-neutral-900">It is you.</span>
        </p>
        
        <div className="mt-12 text-lg text-neutral-600 max-w-3xl mx-auto">
          <p className="mb-6">
            The <strong>Fiduciary Standard</strong> isn’t just a badge we wear. It’s the legal and ethical bedrock of our entire firm. No commissions. No hidden incentives. Just advice.
          </p>
          <p>
             Most advisors are incentivized to keep your money. We are incentivized to keep your trust.
             <span className="text-xs align-top text-neutral-400 ml-1">[2]</span>
          </p>
        </div>
      </section>

      {/* 2. THE PROBLEM: The Cost of Non-Fiduciary Advice */}
      <section className="px-6 py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The High Cost of "Standard" Advice</h2>
            <p className="text-lg text-neutral-600 mb-4">
              A 1% fee sounds small. But over 20 years, it acts as a massive wealth transfer—moving hundreds of thousands of dollars from your family to your advisor.
            </p>
            <p className="text-lg text-neutral-600">
              Minimizing cost is not just about saving money; it is a <strong>fiduciary act of prudence</strong>. Prudence dictates that we should not waste your assets.
              <span className="text-xs align-top text-neutral-400 ml-1">[3]</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
            <FeeChart />
          </div>
        </div>
      </section>

      {/* 3. HARD SKILLS: CFA Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-white p-2 rounded-xl">
             <CFAFunnel />
             <p className="text-center text-sm text-neutral-500 mt-2">
               Fewer than 1 in 5 candidates ever earn the charter. <span className="text-xs text-neutral-400">[4]</span>
             </p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">The Science of Wealth Management</h2>
            <h3 className="text-xl text-blue-600 font-medium mb-4">Chartered Financial Analyst (CFA)</h3>
            <p className="text-neutral-600 mb-6">
              Investing is not a guessing game. It is a discipline grounded in economics, quantitative analysis, and behavioral science.
            </p>
            <p className="text-neutral-600 mb-6">
              The CFA charter is widely regarded as the <strong>"Gold Standard"</strong> of the investment profession <span className="text-xs text-neutral-400">[5]</span>. The curriculum covers over 9,000 pages of advanced finance and takes an average of 4 years to complete.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-neutral-700 bg-blue-50/50 py-2 pr-2 rounded-r">
              "The most respected and recognized investment designation in the world."
              <footer className="text-xs text-neutral-500 mt-2 not-italic">— Financial Times</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4. SOFT SKILLS: CFP Section */}
      <section className="px-6 py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Art of Life Planning</h2>
            <h3 className="text-xl text-blue-600 font-medium mb-4">Certified Financial Planner (CFP®)</h3>
            <p className="text-neutral-600 mb-6">
              Your money doesn't exist in a vacuum. It exists to support your life, your family, and your legacy.
            </p>
            <p className="text-neutral-600 mb-6">
              While the CFA ensures your <em>investments</em> are sound, the CFP ensures your <em>plan</em> is sound. We are trained in the <strong>Psychology of Financial Planning</strong> <span className="text-xs text-neutral-400">[6]</span>, helping you navigate fear and anxiety to make rational decisions.
            </p>
            <p className="font-medium text-neutral-900">
              We don't just plan for your money. We plan for your peace of mind.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
            <AdvisorMatrix />
          </div>
        </div>
      </section>

      {/* 5. COMPARISON & OATH */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">The Standard You Deserve</h2>
        
        <div className="mb-20">
          <Scorecard />
        </div>

        <div className="bg-neutral-900 text-white p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-8 font-serif">Our Fiduciary Oath</h3>
          <ul className="space-y-4 text-lg text-neutral-300">
            <li className="flex gap-3">
              <span className="text-green-400">1.</span> I will always put your best interests first.
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">2.</span> I will act with prudence; with the skill, care, diligence, and good judgment of a professional.
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">3.</span> I will not mislead you, and I will provide conspicuous, full and fair disclosure of all important facts.
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">4.</span> I will fully disclose and fairly manage, in your favor, any unavoidable conflicts.
            </li>
          </ul>
          
          <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif italic text-2xl">David [Last Name]</div>
            <button className="bg-white text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-colors">
              Start the Conversation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}