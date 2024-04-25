import React, { useState } from 'react';
import faqItems from "../Assets/2024/FAQ/data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
          <div className="question-bubble" onClick={() => handleQuestionClick(index)}>
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="answer-dropdown">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;