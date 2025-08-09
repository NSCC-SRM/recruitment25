import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is NSCC?",
      answer: "NSCC (Newton School of Coding Club) is a vibrant community at SRM where technology and innovation converge. With three specialized domains—Tech, Non-Tech, and Creatives—the club offers a platform for students to enhance their skills, collaborate on projects, and explore the cutting edge of coding."
    },
    {
      question: "What can one hope to gain from being a member of NSCC?",
      answer: "By joining NSCC, members gain advanced coding skills, engage in hands-on experiences through hackathons and ideathons, and connect with senior experts for valuable mentorship. The club also opens doors to career opportunities and fosters personal growth in the tech field."
    },
    {
      question: "How is the club structured, and what are the roles and responsibilities of its members?",
      answer: "NSCC's structure includes Members, Associates, Associate Directors, Domain Directors, Joint Secretary, Secretary, Board Members, Founder, and Faculty Incharge. Each role is essential, with responsibilities ranging from coding and event organization to leadership and mentoring. For detailed insights, visit NSCC SRM's Instagram or website."
    },
    {
      question: "What are the primary goals and objectives of the NSCC?",
      answer: "The primary objective of NSCC is to create a supportive environment that nurtures innovation and learning. The club focuses on keeping students updated with technology, offering real-world problem-solving, and excelling in coding and computer science to develop future leaders."
    },
    {
      question: "What kind of non-technical skills are emphasized within the club?",
      answer: "NSCC emphasizes the development of non-technical skills such as teamwork, leadership, project management, communication, and creative problem-solving. These skills are crucial for effective collaboration and success in both club activities and professional careers."
    },
    {
      question: "How does the club support new members in getting acclimated and involved?",
      answer: "NSCC supports new members through orientation sessions, mentorship from senior experts, and opportunities to participate in events and projects. This approach ensures that newcomers quickly integrate into the club and actively contribute to its community."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden" id="faq">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-[#26E8E8]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-[#26E8E8]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-20">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#26E8E8] via-white to-[#26E8E8] bg-clip-text text-transparent">
            FAQ
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Everything you need to know about NSCC SRM
        </p>
      </div>

      {/* FAQ Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-500 transform ${
                openIndex === index ? 'scale-[1.02]' : 'scale-100'
              }`}
            >
              <div 
                className={`relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  openIndex === index 
                    ? 'border-[#26E8E8]/50 shadow-2xl shadow-[#26E8E8]/25' 
                    : 'hover:border-white/20 hover:shadow-xl'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#26E8E8]/5 to-transparent opacity-0 transition-opacity duration-500 ${
                  openIndex === index ? 'opacity-100' : 'group-hover:opacity-50'
                }`}></div>
                
                {/* Question */}
                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white pr-8 leading-relaxed">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] rounded-xl flex items-center justify-center transition-all duration-500 ${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <FontAwesomeIcon 
                        icon={openIndex === index ? faAngleUp : faAngleDown} 
                        className="text-black text-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Answer */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8">
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-black/40 backdrop-blur-xl border border-[#26E8E8]/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] hover:from-[#1a9b9b] hover:to-[#26E8E8] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
