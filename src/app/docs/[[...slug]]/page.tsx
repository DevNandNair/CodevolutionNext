export  default function Docs({params}:{
    params:{
        slug: string[]
    }
}){
    console.log(params);
    
    if (params.slug?.length===2) {
        return <h1>we are viewing the feature {params.slug[0]} with sub feature{params.slug[1]}</h1>
        
    }
    if (params.slug?.length===1) {
        return <h1>We are viewing the feature {params.slug[0]}</h1>
        
    }
    return <>
    <h1>Docs home page</h1>
    </>
}