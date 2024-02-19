import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactList = ({ items = [] }) => {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>
          {item.type === 'Phone' && (
            <div>
              
              <FontAwesomeIcon icon={faPhone} />
              <strong style={{ marginLeft: '0.5rem' }}>Phone:</strong>

              {item.value}
            </div>
          )}
          {item.type === 'Email' && (
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <strong style={{ marginLeft: '0.5rem' }}>Email:</strong>

              <a href={`mailto:${item.value}`}>{item.value}</a>
            </div>
          )}
          {item.type === 'Linkedin' && (
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
              <strong style={{ marginLeft: '0.5rem' }}>LinkedIn:</strong>

              <a href={item.value} target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            </div>
          )}
          {item.type === 'Github' && (
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <strong style={{ marginLeft: '0.5rem' }}>GitHub:</strong>

              <a href={item.value} target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
