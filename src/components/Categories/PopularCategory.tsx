import React from 'react'
import hairRituals from '../../Images/hair.jpg'
import './PopularCategory.css'
import bodybliss from '../../Images/body.jpg'
import face from '../../Images/facial.jpg'
import beauty from '../../Images/beauty.jpg'
type Category={
    id:number;
    name:string;
    image:string;
}

const categories:Category[] = [
    {id:1,name:'Hair Rituals',image:hairRituals},
    {id:2,name:'Facial Essentials',image:face},
    {id:3,name:'Body Bliss',image:bodybliss},
    {id:4,name:'Beauty Bundles',image:beauty}
];

export default function PopularCategory() {
  return (
    <section className='py-8'>
        {/* Shop from our */}
        <h2 className='text-center text-gray-800 text-xl font-semibold mb-2'>
                Shop from our
        </h2>
            
            {/* Popular Categories */}
         <h2 className='text-center text-gray-800 text-4xl font-semibold mb-6'>
                <span className='font-bold'>Popular Categories</span>
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center'>
            {categories.map(category =>(
                <div key={category.id} className='text-center'>
                    {/* category image */}
                    <div className='category-card'>
                        <img src={category.image} alt={category.name} className='category-image' />
                    </div>
                    {/* Category name */}
                    <h3 className='mt-4 text-gray-950 text-md font-semibold'>{category.name}</h3>
                </div>
            ))}

        </div>

    </section>
  )
}
