import axios from "axios";
import { type Dataform } from "../types/variables";

export async function FetchData () {
    const { data } = await axios.get("http://localhost:3000/tasks").then((data) => {return data})
    return data
}

export async function PostData (dataform: Dataform) {
    await axios.post("http://localhost:3000/tasks", dataform).then((response)=> {return response})
}

export async function UpdateData (id: string | null, dataform: Dataform) {
    await axios.put(`http://localhost:3000/tasks/${id}`, dataform).then((data) => {return data})
}

export async function DeleteData (id: string | undefined) {
    await axios.delete(`http://localhost:3000/tasks/${id}`).then(response => { return response });
}

export async function SearchData (id: string | null) {
    const { data } = await axios.get(`http://localhost:3000/tasks/${id}`).then((data) => {return data});
    return data
}

export async function UpdateStatus (id: string, status: string){
    const response : Dataform = await SearchData(id) 
    response.status = status
    
    await UpdateData(id, response)
}
