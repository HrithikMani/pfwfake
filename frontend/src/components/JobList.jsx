import React from 'react';

const jobs = [
  {
    id: 1,
    company: 'DXC Technology',
    jobTitle: 'Software Engineer',
    link: 'https://careers.dxc.com/global/en/',
  },
  {
    id: 2,
    company: 'Microsoft',
    jobTitle: 'Data Analyst',
    link: 'https://jobs.careers.microsoft.com/us/en/job/1538091/Data-Analyst',
  },
  {
    id: 3,
    company: 'Amazon',
    jobTitle: 'Business Intelligence',
    link: 'https://www.amazon.jobs/en/job_categories/business-intelligence',
  },
];

const JobList = () => {
  return (
    <div>
      <h2>Job Openings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.company}</strong> - {job.jobTitle}{' '}
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
