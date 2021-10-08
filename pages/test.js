import React from 'react';


const test = (genes) => {
    console.log(genes)
    return ( 
        <div>
        
            <h2>test</h2>
        </div>
     );
}
 
export default test;

export async function getServerSideProps() {
    const res = await fetch(`https://api.axie.technology/getgenes/102305`)
    const gendata= await res.json()

    return{
        props: {
            genes: gendata
        }
    }
}