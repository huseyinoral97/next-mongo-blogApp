import CardList from '@/components/CardList'
import React from 'react'

const BlogPage = ({ params }) => {
    console.log(params)
    return (
        <div>
            <div className="bg-orange-400 justify-center flex items-center py-3">
                <h1 className='font-bold'>{params.cat}</h1>
            </div>
            <CardList />
        </div>
    )
}

export default BlogPage