import React, { useRef, useState,useEffect } from 'react';
import styled from 'styled-components';
import EmailEditor, { EditorRef } from 'react-email-editor'; 
import sample from './data.json'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const DesignEdit = () => {
  const emailEditorRef = useRef(null);
  const [error, setError] = useState(null);
  const [Loading,SetLoding] = useState(false);
  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    if (!unlayer) {
      setError('Error: Unable to access the email editor.');
      return;
    }

    unlayer.saveDesign((design) => {
      if (design) {
        console.log('saveDesign', design);
        alert('Design JSON has been logged in your developer console.');
      } else {
        setError('Error saving the design.');
      }
    });
  };
  
  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };
  function onload(unlayer) {
    unlayer.addEventListener('design:loaded', onDesignLoad);
    unlayer.loadDesign(sample);
  
  }
  
  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    
    if (!unlayer) {
      setError('Error: Unable to access the email editor.');
      return;
    }

    unlayer.exportHtml((data) => {
      const { html } = data;
      if (html) {
        console.log('exportHtml', html);
        alert('Output HTML has been logged in your developer console.');
      } else {
        setError('Error exporting the HTML.');
      }
    });
  };

  return (
    <Container>
      

      {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

      <EmailEditor
      className='chandu-email-editor'
        ref={emailEditorRef}
        onLoad={onload}
        
        options={{
          version: 'latest',
          branding: false,
          appearance: {
            theme: 'modern_light',
          },
        }}
      />
    </Container>
  );
};

export default DesignEdit;

