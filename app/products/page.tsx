import React from 'react'
import PageItem from '../components/pageItem'
import Link from 'next/link';

interface Product {
    id: string,
    name: string,
    price: number,
}

const ProductsPage = async () => {
    const data = await fetch("http://localhost:3000/api/Products")
        .then((response) => response.json());

    console.log(data.length,'data')

    return (
        <PageItem params={{
            title: 'Products',
            color: '',
            Child:
                <div className='flex flex-col justify-center items-center p-6 gap-5'>
                    {
                        data.map(((product: Product) =>
                        

                            <Link key={product.id} href={`/products/${product.id}`}>
                                <div className=' text-zinc-950 flex gap-3  '>

                                    <div className='bg-slate-400 p-2 rounded-lg shadow'>
                                        <span className='text-lg font-semibold text-amber-700 '>
                                            {'ID:'}
                                        </span>
                                        <span>{product.id}</span>
                                    </div>

                                    <div className='bg-slate-400 p-2 rounded-lg shadow'>
                                        <span className='text-lg font-semibold text-amber-700 '>{'Name:'}
                                        </span>
                                        <span>{product.name}</span>
                                    </div>

                                    <div className='bg-slate-400 p-2 rounded-lg shadow'>
                                        <span className='text-lg font-semibold text-amber-700 '>{'Price:'}
                                        </span>
                                        <span>{product.price}</span>
                                    </div>
                                </div></Link>
                        ))
                    }
                </div>

        }} />
    )
}

export default ProductsPage
