import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import React from 'react';

const DocDisplay: React.FC = () => {
  const allDocsData = useAllDocsData();
  
  // Get the tutorial sidebar specifically
  let upperBodyDocsData = allDocsData.default.versions[0].docs;
  const config = {"upper-body/upper-body": true}
  upperBodyDocsData = upperBodyDocsData.filter(doc => {
    return config[doc.id];
  })

  return (
    <div>
      <h2>Upper Body Docs:</h2>
      {upperBodyDocsData && upperBodyDocsData.map((doc, index) => 
        <div key={index}>
          {JSON.stringify(doc)}
        </div>
      )}
    </div>
  );
};

export default DocDisplay;
