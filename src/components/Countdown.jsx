import { useState } from "react"
import { convertMilliseconds, countdownIn24Hours } from "../utils"

export default function Countdown(props) {

    const {handleChangePage, daysWords, datetime, day} = props

    const targetMillis = datetime || Date.UTC(1944,2,17,12,0,0)

    const [remainingMs, setRemainingMs] = useState(countdownIn24Hours(targetMillis))

    const timer = convertMilliseconds(remainingMs)
    console.log(timer)


    return (
        <div className="card countdown-card">
            <h1 className="item-header">Day {1}</h1>
            <div className="today-container">
                <div>
                    <p>Time remaining</p>
                    <h3>13H 45M 22S</h3>
                </div>
                <div>
                    <p>Words for today</p>
                    <h3>  16</h3>
                </div>
            </div>
            <button className="start-task">
                <h6>Start</h6>
            </button>
        </div>
    )
}
