// "use client"

import React, { useEffect, useState } from 'react'
import PageItem from '../components/pageItem'
import PostCardItem from '../components/postCard';
import Link from 'next/link';
import { sort } from 'fast-sort';


interface Props {
    searchParams: { sortOrder: string }
}

interface Post {
    id: number,
    title: string,
    userId: number,
    body: string
}

const linksData = [{
    title: 'Title',
    href: '/posts?sortOrder=title'
},
{
    title: 'ID',
    href: '/posts?sortOrder=id'
},
];

interface LinkItem {
    title: string,
    href: string,
}

async function fetchPostsDataFromAPI() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}


const PostsPage = async ({ searchParams: { sortOrder } }: Props) => {

    const dataList: Post[] = await fetchPostsDataFromAPI();

    const sortedPostsList = sort(dataList).
        asc(
            sortOrder == 'title' ?
                (post: Post) => post.title
                : sortOrder == 'id' ?
                    (post: Post) => post.id
                    :
                    (post: Post) => post
        );

    return (
        <div>
            <PageItem params={{
                title: 'Posts',
                color: '',
                Child:
                    <>
                        <div className='py-6 flex flex-col gap-6'>
                            <span className='p-3 text-lg text-center w-72  rounded-lg shadow-lg'>
                                Click On One Of This Buttons To Sort These Posts By This Order
                            </span>
                            <div className='flex justify-center items-center gap-6 py-4 '>
                                {linksData.map((link: LinkItem, index: number) =>
                                    <Link
                                        className='bg-slate-900 p-3 px-9 rounded-lg text-lg font-semibold shadow-lg'
                                        key={`sort-${index}`} href={link.href}>
                                        {link.title}
                                    </Link>)}
                            </div>
                        </div>
                        <div className=' flex flex-wrap justify-center items p-6 gap-8'>
                            {sortedPostsList?.map(
                                (post: Post) =>
                                    <PostCardItem key={post.id} params={{ post: post }} />

                            )}
                        </div>
                    </>
            }} />
        </div>
    )
}

export default PostsPage
