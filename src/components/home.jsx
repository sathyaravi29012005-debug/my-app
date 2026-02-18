import axios, { Axios } from "axios";
import { useEffect } from "react";

export const Home =() =>{
    async function getpost(){

        try {

            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            console.log (data);
            // return data;
        } catch (err){
            console.log("error fetching API",err);
        }
        
    }
    // useEffect(()=> {
    //     getpost();
    //     []
    // }

 async function getpostusingAxios(){
        try{
            await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log ('res'.data);
           
        } catch (err){
            console.log("error fetchingAPI",err);
        }
         
    }
    useEffect(()=> {
        axios.get('url').then((res=>{
            console.log(res.data);
        }));
        
        
        
        
    },[]);



    return(
        <div>
            this is home page
        </div>
    )
}