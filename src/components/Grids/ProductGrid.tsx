import React, {useState} from 'react'
import ProductCard from '../Cards/ProductCard'
import { products } from '../../Data/products'


const ITEMS_PER_PAGE = 12;
export default function ProductGrid() {

    const [currentPage,setCurrentPage] = useState(1);

    const handleClick = (page:number) =>{
        setCurrentPage(page)
    }

    const currentProducts = products.slice(
        (currentPage - 1)* ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(products.length/ITEMS_PER_PAGE)
  return (
    <div className='container mx-auto py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {currentProducts.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>

        <div className='flex justify-center mt-8'>
            {[...Array(totalPages)].map((_,i)=>(
                <button key={i} onClick={()=>handleClick(i+1)} className={`px-4 py-2 mx-1 border ${i+1 === currentPage ? 'bg-purple-700 text-white':'bg-white text-purple-700'}`}>
                    {i+1}
                </button>
            ))}

        </div>

    </div>
  )
}
