//for looping rendering
//conditional rendering
//props drilling








export const General = () =>{
    const arr = [1,2,3,4,5]
    const twoMultiplied = arr. map((value) => value*2)


    

    return(
       <div>
        General Dashborad
        {
            arr.map((val)=>(
                
                    
                <div>{val}</div>
                
            )

            
            )
        }
       </div>
    
    )
}