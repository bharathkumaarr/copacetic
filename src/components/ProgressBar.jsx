export default function ProgressBar(props) {
    const {text, remainder} = props

    const arr = [0,1,2,3,4,5,6,7,8,9]
    return (
        <div className="level">
            <div>
                <h4>{text == 'lvl NaN'? 'lvl 0' : text}</h4>
            </div>

            {arr.map((element, elementIdx)=>{
                return (
                    <div className="level-bar" key={elementIdx}>{}</div>
                )

            })}
            <div className="xp" style={{ width: `${isNaN(remainder) ? 0 : remainder}%` }}></div>
        </div>
    )
}

