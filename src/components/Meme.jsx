import memesData from '../memesData.jsx'
import { useState } from 'react'
 




export default function Meme() {

    const [memeImage, setMemeImage] = useState('') // state to store the meme image url

    function getMemeImage() { // function to get a random meme url
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() *  memesArray.length)
        const randomMeme = memesArray[randomIndex].url
        setMemeImage(randomMeme)
        return randomMeme
    }
    function handleMouseClick(e) { // function to handle the button click
        e.preventDefault() // prevent the form from submitting
        console.log(getMemeImage())
    }

    return ( // return the form
        <>
        <form>
            <div className="top-form">
                <div className="toptext">
                    <p className="labelte   t">Top text</p>
                    <input type="text" placeholder="Shut up" />
                </div>
                <div className="bottomtext">
                    <p className="labeltext">Bottom text</p>
                    <input type="text" placeholder="And take my money" />
                </div>
            </div>
            <button onClick={handleMouseClick}>Get a new meme 🖼</button>
            {memeImage && <img className="meme-image" src={memeImage}/>}
        </form>
        </>
    )
}