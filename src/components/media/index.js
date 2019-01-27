import React from 'react';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';

const KMedia = ({ title, desc, path }) => (
  <Media>
    <img
      width={64}
      height={64}
      className="mr-3"
      src={path}
      alt="Media"
    />
    <Media.Body>
      <h5>{title}</h5>
      <p>
        {desc}
      </p>
    </Media.Body>
  </Media>
);

export default KMedia;