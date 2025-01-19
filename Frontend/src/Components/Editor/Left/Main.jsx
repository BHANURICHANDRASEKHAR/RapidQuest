import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import EmailEditor from 'react-email-editor';
import GetLayout,{SaveChanges} from './getLayout.js'; 
import sample from './data.json';
import Loader from './Loader.jsx';
import { on_Failure, on_Success } from '../../helpers.js';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const DesignEdit = () => {
  const emailEditorRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    const fetchLayout = async () => {
      setLoading(true);
      try {
        const response = await GetLayout();
      
        setLayout(response || sample); 
      } catch (err) {
        setError('Failed to fetch layout. Using default design.');
        setLayout(sample); 
      } finally {
        setLoading(false);
      }
    };

    fetchLayout();
  }, []);



  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    if (!unlayer) {
      setError('Error: Unable to access the email editor.');
      return;
    }
    unlayer.exportHtml((data) => {
      SaveChanges(setLoading,data)
      
    });
  };
  const onLoad = (unlayer) => {

    if (sample) {
      unlayer.loadDesign(sample); 
    }
    unlayer.addEventListener('design:loaded', () => {
      on_Success('Layout Fetched successfully')
    });
  };
 console.log(loading)
  return (
    <Container>
      {loading && <Loader/>}
      {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
      <div className='row mt-4 justify-content-end'>
      <button onClick={exportHtml} className='btn btn-success col-auto'>{loading ? 'Loading' :'Export HTML'}</button>

    </div>
    
      <EmailEditor
        className="chandu-email-editor"
        style={{height: '80vh', width:'100%'}}
        ref={emailEditorRef}
        onLoad={onLoad}
        
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
