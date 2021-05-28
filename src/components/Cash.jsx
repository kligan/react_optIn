import React from 'react'

export default function Cash(props) {
    return (
        <div data-testid="cash">
            <h1>Get your free £{props.cash_value} now</h1>
        </div>
    )
}
