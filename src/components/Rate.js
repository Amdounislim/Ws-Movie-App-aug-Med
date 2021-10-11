import React from 'react'

const Rate = ({ rating, setSearchRate = () => { } }) => {
    let stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(
                <span className="rating" style={{ cursor: "pointer" }} onClick={() => setSearchRate(i + 1)}>
                    ★
                </span>)
        }
        else {
            stars.push(
                <span className="rating" style={{ cursor: "pointer" }} onClick={() => setSearchRate(i + 1)}>
                    ☆
                </span>)
        }

    }
    return (
        <div>{stars}</div>
    )
}

export default Rate
