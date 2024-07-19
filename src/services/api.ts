import axios from "axios";
import { type Dataform } from "../types/variables";

export async function FetchData () {
    const { data } =  await axios.get("http://localhost:3000/tasks").then((data) => {return data})
    return data
}

export async function PostData (dataform: Dataform) {
    axios.post("http://localhost:3000/tasks", dataform).then((response)=> {return response})
}

export async function UpdataData (id: string) {
    await axios.put(`http://localhost:3000/tasks/${id}`).then((data) => {return data})
}

export async function DeleteData (id: string) {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(response => { return response });
}