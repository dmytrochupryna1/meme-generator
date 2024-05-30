export default function Meme() {
    function handleMouseOver(e) {
        console.log('Mouse over event triggered')
    }
    return (
        <>
        {/* 
            form with two inputs and a button.
            first input has "top text" text next to the input
            second input has "bottom text" text next to the input
         */}
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
            <button onMouseOver={handleMouseOver}>Get a new meme 🖼</button>
        </form>
        </>
    )
}