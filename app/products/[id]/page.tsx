import { Metadata, ResolvingMetadata } from "next"



interface Props {
    params : {
        id : string
    }
}


const getSingleProduct = async (id: string) => {
    let res = await fetch(`https://shop-backend-3b26.onrender.com/api/products/${id}`);

    if (!res.ok) {
        throw new Error('something went wrong');
    }

    return res.json();
}



export async function generateMetadata(
    { params } : Props,
    parent : ResolvingMetadata
) : Promise<Metadata> {
    let productData = await getSingleProduct(params.id);
    let product = productData?.product
    
    return {
        title : product.title,
        description : product.body.substring(0,120)
    }
}


export default async function ProductSinglePage({ params : { id } } : Props) {
    
    let productData = await getSingleProduct(id);
    let product = productData?.product

    return (
        <div>
            <h2>{product?.title}</h2>
            <p>{product?.body}</p>
        </div>
    )
}