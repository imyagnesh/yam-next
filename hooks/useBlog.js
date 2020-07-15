import useSWR from 'swr';

import fetch from '@lib/fetch';

const useBlog = () => {
  const query = `
  {
    blogs(start: 0, limit: 9, sort: "created_at:desc") {
      id
      Title
      description
      image {
        ...file
      }
      created_at
      content
      categories {
        categoryName
        categoryDescription
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

export default useBlog;