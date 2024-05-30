import memesData from '../memesData.jsx'
 




export default function Meme() {

    function getRandomUrl() { // function to get a random meme url
        const randomIndex = Math.floor(Math.random() * memesData.data.memes.length)
        return memesData.data.memes[randomIndex].url
    }
    function handleMouseClick(e) { // function to handle the button click
        e.preventDefault() // prevent the form from submitting
        console.log(getRandomUrl())
    }


    return ( // return the form
        <>
        <form>
            <div className="top-form">
                <div className="toptext">
                    <p className="labeltext">Top text</p>
                    <input type="text" placeholder="Shut up" />
                </div>
                <div className="bottomtext">
                    <p className="labeltext">Bottom text</p>
                    <input type="text" placeholder="And take my money" />
                </div>
            </div>
            <button onClick={handleMouseClick}>Get a new meme 🖼</button>
        </form>
        </>
    )
}