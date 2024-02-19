// Section.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Section = ({ title, icon, children }) => {
  return (
    <section>
      <h2 className="section-heading">
        {title}
        <div className='fa-icon'>
          <FontAwesomeIcon icon={icon} />
        </div>
      </h2>
      {children}
    </section>
  );
};

export default Section;
