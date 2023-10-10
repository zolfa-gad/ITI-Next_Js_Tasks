import { title } from 'process'
import React from 'react'

interface Props {
    params: {
        title: string,
        color: string,
        Child: React.ReactNode

    }
}

const PageItem = ({ params: { title, color = '', Child } }: Props) => {
    return (
        <div className='min-h-screen bg-slate-500 flex flex-col justify-center items-center  '>
            <h2 className={`text-4xl font-semibold p-3 ${color}`}>
                {`Hello From ${title} Page`}
            </h2>
            {Child}
        </div>
    )
}

export default PageItem
