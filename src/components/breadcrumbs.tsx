import React from 'react'
import Link from 'next/link'

function breadcrumbs() {
    return (
        <div className="breadcrumbs mx-20 text-sm">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><a>Documents</a></li>
                <li>Add Document</li>
            </ul>
        </div>
    )
}

export default breadcrumbs