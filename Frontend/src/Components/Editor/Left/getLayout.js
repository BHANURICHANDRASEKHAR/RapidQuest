import axios from 'axios';
import {ApiLink} from '../../../App'
import { on_Success,on_Failure } from '../../helpers';
export default async function GetLayout()
{
 
    try{
        const response = await axios.get(`${ApiLink}/getLayout`);
        if(response.data.status)
        {
           
            return response.data.data;
        }
    }
    catch(error){
        console.error(error.message);
       
    }
   
}
export async function SaveChanges(setLoading, data) {
    setLoading(true);
  
    try {
      const { html, design } = data;
  
   
      const response = await axios.post(`${ApiLink}/SaveChanges`, { data: design });
  
      if (response.data.status) {
        setLoading(false);
        on_Success('Layout saved successfully');
  
        downloadHtml(html, 'layout.html');
      } else {
        setLoading(false);
        on_Failure('Error saving layout');
      }
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      on_Failure('Error saving layout');
    } finally {
      setLoading(false);
    }
  }
  
  function downloadHtml(htmlContent, fileName) {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  
    URL.revokeObjectURL(url);
  }