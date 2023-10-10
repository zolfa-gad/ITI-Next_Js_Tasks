import React from 'react'

interface Props {
    params: {
        post: {

            id: number,
            title: string,
            userId: number,
            body: string
        }
    }
}

const PostCardItem = ({ params: { post } }: Props) => {
    return (
        <div className='w-80 h-72 bg-gray-800 rounded-lg flex flex-col justify-start items-center p-3 gap-3 shadow-lg'>
            <div className='w-full flex justify-between items-center bg-lime p-2'>
                <span className='font-bold text-lg bg-white text-black p-2 px-4 rounded-lg me-2'>
                    {post.id}
                </span>
                <h2 className='w-full text-xl font-semibold text-center'>
                    {post.title}
                </h2>
            </div>
            <p className='h-full flex flex-col justify-center items-center text-blue-200 text-center italic overflow-hidden'>
                {`User_${post.userId}:  ${post.body}`}
            </p>
        </div>
    )
}

export default PostCardItem
