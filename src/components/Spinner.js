import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
    return (
        <div className="text-center p-4">
            <img src={loading} alt="Loading" />
        </div>
    )
}
