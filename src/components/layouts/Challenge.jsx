import ProgressBar from "../ProgressBar"

export default function Challenge() {
    const word = 'copacetic'
    const definition = 'in excellent order'
    return (
        <section id="challenge">
            <h1>{word}</h1>
            <p>{definition}</p>
            <div className="helper">
                <div>
                    {/* CONTAINS ALL THE ERROR CORRECTED VISUAL BARS */}
                    {[...Array(definition.length).keys()].map((element, elementIdx)=>{
                        //determine whether or not the user has typed the character they think is correct, and show red or blue depending on whether it is right or wrong
                        return (
                            <div key={elementIdx}></div>
                        )
                    })}
                </div>

                <input type="text" placeholder="Enter the definition..." />
            </div>
            <div className="challenge-btns">
                <button className="card-button-secondary">
                    <h6>Quit</h6>
                </button>
                <button className="card-button-primary">
                    <h6>I forgot</h6>
                </button>
            </div>
            <ProgressBar />
        </section>
    )
}