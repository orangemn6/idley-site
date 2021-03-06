import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>Here is Idleyhost</h1>
          <p className="main-subtitle">You&apos;re gonna love it. Promise.</p>
          <Button label="Get Started" />
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;
