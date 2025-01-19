import { toast } from "react-toastify";
export function on_Success(msg)
{
    toast.success(msg);
}
export function on_Failure(msg){
    toast.error(msg);
}