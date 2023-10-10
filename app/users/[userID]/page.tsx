import PageItem from '@/app/components/pageItem'
import React from 'react'

interface Props {
    params: { userID: number }
}
export default function UserPageID({ params: { userID } }: Props) {

    return (
        <PageItem params={{
            title: `Users`,
            color: '',
            Child: <div>
                <span className='text-2xl text-emerald-950'>
                    {`User ID --> ${userID}`}
                </span>
            </div>
            // Child: <></>
            // Child: <div> {`User ID --> ${userID}`}</div>
        }} />

    )
}
