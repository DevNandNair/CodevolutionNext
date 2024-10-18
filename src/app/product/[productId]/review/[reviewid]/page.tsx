import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";

export default function Review({params}:{
    params:{
        productId:string
        reviewid:string
    }
}){
    if (parseInt(params.reviewid)>1000) {
        notFound()
    }
    return <>
    <h1>Review no:{params.reviewid} for product no:{params.productId}</h1>
    </>
}