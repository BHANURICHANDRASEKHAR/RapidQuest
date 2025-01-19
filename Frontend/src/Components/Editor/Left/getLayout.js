import axios from 'axios';
import {ApiLink} from '../../../App'
export default async function GetLayout(setLoader,SetData)
{
    setLoader(true);
    try{
        const response = await axios.get(`${ApiLink}/getLayout`);
        if(response.data.status)
        {
            setLoader(false);
            SetData(response.data.data);
        }
    }
    catch(error){
        console.error(error);
        setLoader(false);
    }
    finally{
        setLoader(false);
    }

}