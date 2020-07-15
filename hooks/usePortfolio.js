import useSWR from 'swr';

import fetch from '@lib/fetch';

const usePortfolio = () => {
  const query = `
  {
    projects(start: 0, limit: 9, sort: "created_at:desc") {
      id
      projectName
      Description
      link
      category
      role
      video {
        ...file
      }
      images {
        ...file
      }
    }   
  }
  
  fragment file on UploadFile {
    name
    caption
    formats
    url
  }
  `;
  return useSWR([query], fetch);
};

export default usePortfolio;