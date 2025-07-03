// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import Link from 'next/link';

const Product360: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Product 360 - For Design, Manufacturing and Collaboration</title>
        <meta name="description" content="Modern integrated platform that connects product with data and processes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Black Gradient - Changed from red-black to gray-black */}
      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-8 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Product 360 — For Design, Manufacturing and Collaboration
          </h1>
          <p className="text-lg md:text-xl text-center mt-4 max-w-3xl mx-auto text-gray-200">
            A modern integrated platform that connects product with data and processes
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Platform Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border-l-4 border-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-white">Modern Integrated Platform</h2>
                <p className="text-lg mb-8 text-gray-300">
                  Product 360 is a modern integrated platform that connects product with data and processes.
                </p>
                <ul className="space-y-4">
                  {[
                    "Single collaboration portal across all departments to synchronize teams and activities",
                    "Central repository for managing product data",
                    "Tool for efficient engineering change management process",
                    "Version control software for document change control",
                    "Easier BOM management",
                    "Can be linked to CAD automation",
                    "Pricing tool for faster error-free quotes, cutting quote times with need-based configuration"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-4 text-lg text-gray-300">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl border-2 border-gray-800">
                <Product360Diagram />
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Features Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Key Collaboration Features</h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CollaborationFeature 
              title="360° Collaboration" 
              description="Single portal for all departments"
              bgColor="from-gray-800 to-black"
            />
            <CollaborationFeature 
              title="BOM Management" 
              description="Flexible product configuration"
              bgColor="from-black to-gray-800"
            />
            <CollaborationFeature 
              title="Engineering Change Management" 
              description="Efficient change management process"
              bgColor="from-black to-gray-800"
            />
            <CollaborationFeature 
              title="Document Change Control" 
              description="Efficient version control system"
              bgColor="from-gray-800 to-black"
            />
          </div>
        </section>

        {/* Process Flow Section */}
        <section className="mb-16">
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-black text-white py-4 px-6">
              <h2 className="text-2xl font-bold">Product 360 Workflow</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "360 – Collaboration", desc: "" },
                  { title: "Collaboration Portal", desc: "Single portal for all departments" },
                  { title: "BOM Management", desc: "Flexible product configuration" },
                  { title: "Engineering Change Management", desc: "Efficient change management" },
                  { title: "Document Change Control", desc: "Efficient version control system" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      {step.desc && <p className="text-gray-300">{step.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end opacity-20">
              <div className="transform -rotate-12">
                <GearIcon className="text-gray-500" size={120} />
              </div>
              <div className="transform rotate-12 -ml-10">
                <GearIcon className="text-gray-300" size={80} />
              </div>
            </div>
            
            <div className="relative z-10 max-w-lg">
              <h2 className="text-3xl font-bold mb-6">Why Choose Product 360?</h2>
              <p className="text-lg mb-8 text-gray-300">
                Our platform offers an integrated approach to product development that streamlines 
                collaboration across departments with flexibility, adaptability, and ease of use.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Reduced time-to-market",
                  "Improved cross-department communication",
                  "Centralized data management",
                  "Error reduction in engineering changes",
                  "Streamlined BOM management",
                  "Faster quoting process",
                  "Enhanced product quality",
                  "Better decision making"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to transform your product development?</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Get started with Product 360 today and experience seamless collaboration across all departments.
            </p>
            <Link href={'/connect/contactUs'}>
              <button className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 border border-gray-700 hover:border-white">
                Request a Demo
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};


const Product360Diagram: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">
      {/* SVG Diagram */}
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-[480px] h-[480px]">
        <circle cx="250" cy="250" r="150" fill="#f0f0f0" stroke="#cccccc" strokeWidth="2" />
        <circle cx="250" cy="250" r="120" fill="white" stroke="#e0e0e0" strokeWidth="2" />

        <text x="250" y="255" fontSize="22" fontWeight="bold" textAnchor="middle" fill="#333">Product 360</text>

        {/* Inner Circle Lines */}
        <path d="M250 130 A120 120 0 0 1 354 190" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <path d="M354 190 A120 120 0 0 1 354 310" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <path d="M354 310 A120 120 0 0 1 250 370" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <path d="M250 370 A120 120 0 0 1 146 310" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <path d="M146 310 A120 120 0 0 1 146 190" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <path d="M146 190 A120 120 0 0 1 250 130" fill="none" stroke="#e0e0e0" strokeWidth="2" />

        {/* Segments */}
        <path d="M250 100 A150 150 0 0 1 380 175 L354 190 A120 120 0 0 0 250 130 Z" fill="#dc2626" />
        <path d="M380 175 A150 150 0 0 1 380 325 L354 310 A120 120 0 0 0 354 190 Z" fill="#fb923c" />
        <path d="M380 325 A150 150 0 0 1 250 400 L250 370 A120 120 0 0 0 354 310 Z" fill="#84cc16" />
        <path d="M250 400 A150 150 0 0 1 120 325 L146 310 A120 120 0 0 0 250 370 Z" fill="#22c55e" />
        <path d="M120 325 A150 150 0 0 1 120 175 L146 190 A120 120 0 0 0 146 310 Z" fill="#ef4444" />
        <path d="M120 175 A150 150 0 0 1 250 100 L250 130 A120 120 0 0 0 146 190 Z" fill="#8b5cf6" />
      </svg>

      {/* Legend */}
      <div className="space-y-3 text-sm md:text-base">
        <LegendItem color="#dc2626" label="Design & Engineering" />
        <LegendItem color="#fb923c" label="Sourcing & Procurement" />
        <LegendItem color="#84cc16" label="Production & Planning" />
        <LegendItem color="#22c55e" label="Sales & Marketing" />
        <LegendItem color="#ef4444" label="Quality Assurance" />
        <LegendItem color="#8b5cf6" label="Customer Service" />
      </div>
    </div>
  );
};

interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded" style={{ backgroundColor: color }}></div>
    <span className="text-gray-300">{label}</span>
  </div>
);


// Component for collaboration features
const CollaborationFeature: React.FC<{
  title: string;
  description: string;
  bgColor: string;
}> = ({ title, description, bgColor }) => {
  return (
    <div className={`bg-gradient-to-r ${bgColor} text-white p-8 rounded-lg shadow-lg relative overflow-hidden border border-gray-700 hover:shadow-white/20 transition-all hover:-translate-y-1`}>
      <div className="absolute right-0 bottom-0 opacity-20">
        <GearIcon size={80} />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
      <div className="mt-6">
        <a href="#" className="inline-flex items-center text-gray-300 hover:text-white hover:underline">
          Learn more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Gear Icon Component
const GearIcon: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "", size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path fillRule="evenodd" d="M12 3c-.914 0-1.677.133-2.286.418-.605.284-1.007.694-1.261 1.171-.255.482-.389 1.017-.389 1.598 0 .535-.135.908-.311 1.146-.18.247-.414.39-.633.51-.226.125-.463.23-.673.329-.205.097-.365.175-.455.267-.09.091-.168.25-.265.456-.097.21-.203.447-.327.674-.119.218-.263.453-.509.633-.238.177-.611.312-1.146.312-.582 0-1.116.134-1.599.39-.477.253-.887.655-1.17 1.26C.133 12.323 0 13.086 0 14c0 .914.133 1.677.418 2.286.284.605.694 1.007 1.171 1.261.483.256 1.017.39 1.599.39.535 0 .908.135 1.146.311.247.18.39.414.51.633.125.227.23.464.329.673.097.205.175.365.267.455.091.09.25.168.456.265.21.097.447.203.674.327.218.119.453.263.633.509.177.238.312.611.312 1.146 0 .582.134 1.117.39 1.599.253.477.655.887 1.26 1.17.609.285 1.372.418 2.286.418.913 0 1.676-.133 2.285-.418.605-.284 1.007-.694 1.261-1.17.256-.483.39-1.017.39-1.6 0-.534.135-.908.311-1.145.18-.247.414-.39.633-.51.226-.125.463-.23.673-.329.205-.097.365-.175.455-.267.09-.091.168-.25.265-.456.097-.21.203-.447.327-.674.119-.218.263-.453.509-.633.238-.177.611-.312 1.146-.312.582 0 1.116-.134 1.599-.39.477-.253.887-.655 1.17-1.26.285-.609.418-1.372.418-2.286 0-.914-.133-1.677-.418-2.286-.284-.605-.694-1.007-1.171-1.261-.483-.256-1.017-.39-1.599-.39-.535 0-.908-.135-1.146-.311-.247-.18-.39-.414-.51-.633-.125-.227-.23-.464-.329-.673-.097-.205-.175-.365-.267-.455-.091-.09-.25-.168-.456-.265-.21-.097-.447-.203-.674-.327-.218-.119-.453-.263-.633-.509-.177-.238-.312-.611-.312-1.146 0-.582-.134-1.116-.39-1.599-.253-.477-.655-.887-1.26-1.17C13.677 3.133 12.914 3 12 3z" clipRule="evenodd" />
    </svg>
  );
};

export default Product360;