import React, { useState, useEffect } from 'react'

export default function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    return (
        <div className="header">
            <div className="header--left">
                <img src="troll-face.png"/>
                <h2>Meme Generator</h2>
            </div>
            <h3>Window Width: {windowWidth}px</h3>
            

        </div>
    )
}