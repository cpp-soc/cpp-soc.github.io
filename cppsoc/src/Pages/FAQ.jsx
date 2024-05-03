import React, { useState } from 'react';
import faqItems from '../Assets/2024/FAQ/faq.json';
import '../Styles/faq.css';

const FAQ = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleQuestionClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter(i => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
        <div className={`faq-item ${activeIndexes.includes(index) ? 'active' : ''}`} key={index}>
          <div className="question-bubble" onClick={() => handleQuestionClick(index)}>
            {item.question}
          </div>
          {activeIndexes.includes(index) && (
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