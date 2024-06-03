import React, { useState, useEffect } from 'react'

export default function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth) 

    useEffect(() => { // useEffect hook to watch the window width
        function watchWindowWidth() { // function to watch the window width
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWindowWidth) // add event listener to watch the window width

        return () => { // cleanup function to remove the event listener
            window.removeEventListener('resize', watchWindowWidth)
        }
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