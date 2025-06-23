import React from 'react';
import accordionData from '@/data/accordionData.json';

const Accordion = ({ parentId, dataKey = 'default' }) => {
  const dataToRender = accordionData[dataKey] || [];

  return (
    <div className="accordion" id={parentId}>
      {dataToRender.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`heading-${parentId}-${item.id}`}>
            <button
              className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${parentId}-${item.id}`}
              aria-expanded={index === 0 ? 'true' : 'false'}
              aria-controls={`collapse-${parentId}-${item.id}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse-${parentId}-${item.id}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading-${parentId}-${item.id}`}
            data-bs-parent={`#${parentId}`}
          >
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
