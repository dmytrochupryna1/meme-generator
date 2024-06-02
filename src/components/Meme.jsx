import memesData from '../memesData.jsx'
import { useState } from 'react'
 




export default function Meme() {

    const [memeData, setMemeData] = useState({
        topText: '',
        bottomText: '',
        url: 'https://i.imgflip.com/1ihzfe.jpg'
    }) 

    // top text and bottom text must be added to the memeData object onChange of the input fields

    function handleChange(e) { // function to handle the input change
        const {name, value} = e.target
        setMemeData(prevMemeData => {
            return {...prevMemeData, [name]: value}
        })

    }




    function getMemeImage() { // function to get a random meme url
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() *  memesArray.length)
        const randomMeme = memesArray[randomIndex].url
        setMemeData(prevMemeImage => {
            return {...prevMemeImage, url: randomMeme}
        })
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
                    <p className="labeltext">Top text</p>
                    <input 
                        type="text"
                        placeholder="Shut up"
                        name="topText"
                        value={memeData.topText}
                        onChange={handleChange}
                         />
                </div>
                <div className="bottomtext">
                    <p className="labeltext">Bottom text</p>
                    <input 
                        type="text"
                        placeholder="And take my money" 
                        name="bottomText"
                        value={memeData.bottomText}
                        onChange={handleChange}
                        />
                </div>
            </div>
            <button onClick={handleMouseClick}>Get a new meme 🖼</button>
            <div className='meme'>
                {memeData.url && <img className="meme-image" src={memeData.url}/>}
                {memeData.topText && <h2 className='meme-text top'>{memeData.topText}</h2>}
                {memeData.bottomText && <h2 className='meme-text bottom'>{memeData.bottomText}</h2>}            
</div>
        </form>
        </>
    )
}