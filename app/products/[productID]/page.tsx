import PageItem from '@/app/components/pageItem'
import React from 'react'

interface Props {
    params: { productID: string }
}

interface Product {
    id: string,
    name: string,
    price: number,
}

const ProductPageID = async ({ params: { productID } }: Props) => {
    const product: Product = await fetch(`http://localhost:3000/api/Products/${productID}`)
        .then((response) => response.json());

    return (
        <PageItem params={{
            title: `Product`,
            color: '',
            Child: <div className='flex flex-col p-6'>
                <span className='text-2xl text-slate-950'>
                    {`Product ID --> ${product.id}`}
                </span>
                <span className='text-2xl text-slate-950'>
                    {`Product Name --> ${product.name}`}
                </span>
                <span className='text-2xl text-slate-950'>
                    {`Product Price --> ${product.price}`}
                </span>
            </div>
        }} />

    )
}

export default ProductPageID
