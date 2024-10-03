import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <>
            <div className='header'>
                <ul className='navlist'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
