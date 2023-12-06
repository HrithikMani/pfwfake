import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Job Application Submitted:', { name, email, resume });
  };

  return (
    <div>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Resume/CV:
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </label>
        <br />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
