import React from "react";

const faqs = [
  {
    q: "What is the revised last date for project submission for FY 2024–25?",
    a: "The company has extended the final deadline for submitting all FY 2024–25 project reports to September 16, 2025. Submitting on time avoids delays, ensures proper documentation, and keeps project records clean."
  },
  {
    q: "What is our company’s work process?",
    a: "Our work process involves structured planning, transparent communication, and efficient execution. Each team follows a streamlined workflow to ensure accuracy, consistency, and high-quality results for all projects."
  },
  {
    q: "Who is required to submit a monthly work report?",
    a: "Every team member with assigned deliverables must submit a monthly report. This includes interns, executives, developers, designers, and remote staff. Reporting helps track progress and ensures accountability."
  },
  {
    q: "What are the benefits of using our in-house work management system?",
    a: `Our in-house system is designed to make your workflow smooth, fast, and efficient. Benefits include:
• Automated task updates  
• Centralized project tracking  
• Superfast document management  
• One-click progress reporting  
• Real-time team collaboration  
• Secure data handling & cloud backup  
• 24×7 accessibility from any device`
  }
];

const FAQSection = () => {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-20 lg:px-40">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-12">
        Frequently asked questions
      </h2>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {faqs.map((item, index) => (
          <div key={index} className="border bg-[#F7F7F7] rounded-md">
            
            {/* Question */}
            <div className="flex items-start gap-4 p-5 border-b">
              <span className="text-orange-500 font-bold text-2xl">Q</span>
              <p className="font-semibold text-[17px]">{item.q}</p>
            </div>

            {/* Answer */}
            <div className="flex items-start gap-4 px-5 py-4">
              <span className="text-gray-600 font-bold text-2xl">A</span>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">
                {item.a}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
