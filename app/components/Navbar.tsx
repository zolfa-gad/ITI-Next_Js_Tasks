import Link from 'next/link'
import React from 'react'

const NavbarComponent = () => {

    const linksData = [{
        text: 'Contact Us',
        href: '/contactUs'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Products',
        href: `/products`
    },
    {
        text: 'Users',
        href: `/users/${Math.floor(Math.random() * 100)}`
    },
    {
        text: 'Posts',
        href: '/posts?sortOrder=none'
    },];

    return (
        <div className='bg-slate-900 text-white font-bold flex flex-row justify-between items-center w-full h-16 font p-6'>
            <Link className="italic font-extrabold text-2xl	" href={'/'}>
                Home
            </Link>

            <div className="gap-6 flex">
                {linksData.map((link, index) => <Link href={link.href}
                    key={`link-${index}`}
                    className='text-lg rounded-md p-2 '>
                    {link.text}
                </Link>
                )}
            </div>
        </div>

    )
}

export default NavbarComponent
