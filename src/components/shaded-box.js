import { useNavigate } from 'react-router-dom';

// We handle time in PST, the location of the restaurant
function getShadedBoxTexts(curDate) {
    var options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', timeZone: "America/Los_Angeles"};

    const curDay = curDate.getDay(); /*curDate.toLocaleDateString('en-US', {weekday: 'long', timeZone: "America/Los_Angeles"})*/
    const curHour = curDate.getHours(); /*parseInt(curDate.toLocaleDateString('en-US', {hour12: false, hour: '2-digit', timeZone: "America/Los_Angeles"}).slice(-2))*/
    console.log("Day is", curDay, "\nHour is", curHour)

    if (curDay === 6 && 21 <= curHour && curHour <= 24) {
        return (<>
            <h1 className="shaded-box-text" id="open-status">CLOSED</h1>
            <h2 className="shaded-box-text" id="until-status">we're open for lunch and dinner on Monday</h2>
            <div id="shaded-box-spacing"><br/><br/></div>
            <h3 className="shaded-box-text" id="misc-status">Browse our menu to plan<br/>for your next visit at Fin's!</h3>
        </>)
    } else if (curDay === 0 || 21 <= curHour) {
        return (<>
            <h1 className="shaded-box-text" id="open-status">CLOSED</h1>
            <h2 className="shaded-box-text" id="until-status">we're open for lunch and dinner tomorrow</h2>
            <div id="shaded-box-spacing"><br/><br/></div>
            <h3 className="shaded-box-text" id="misc-status">Browse our menu to plan<br/>for your next visit at Fin's!</h3>
        </>)
    } else if (curDay !== 0) {
        if (0 <= curHour && curHour < 11) {
            return (<>
                <h1 className="shaded-box-text" id="open-status">CLOSED</h1>
                <h2 className="shaded-box-text" id="until-status">we're open for lunch at 11:00am today</h2>
                <div id="shaded-box-spacing"><br/><br/></div>
                <h3 className="shaded-box-text" id="misc-status">Browse our menu to plan<br/>for your next visit at Fin's!</h3>
            </>)
        } else if (11 <= curHour && curHour < 15) {
            return (<>
                <h1 className="shaded-box-text" id="open-status">OPEN NOW FOR LUNCH</h1>
                <h2 className="shaded-box-text" id="until-status">until 3:00pm</h2>
                <div id="shaded-box-spacing"><br/><br/></div>
                <h3 className="shaded-box-text" id="misc-status">Come dine in or order takeout!</h3>
                <h1 className="shaded-box-text" id="phone-number">(916) 696 - 7718</h1>
            </>)
        } else if (curHour === 15) {
            return (<>
                <h1 className="shaded-box-text" id="open-status">CLOSED</h1>
                <h2 className="shaded-box-text" id="until-status">we reopen at 4:00-9:00pm for dinner</h2>
                <div id="shaded-box-spacing"><br/><br/></div>
                <h3 className="shaded-box-text" id="misc-status">Browse our menu to plan<br/>for your next visit at Fin's!</h3>
            </>)
        } else if (4 <= curHour && curHour < 21) {
            return (<>
                <h1 className="shaded-box-text" id="open-status">OPEN NOW FOR DINNER</h1>
                <h2 className="shaded-box-text" id="until-status">until 9:00pm</h2>
                <div id="shaded-box-spacing"><br/><br/></div>
                <h3 className="shaded-box-text" id="misc-status">Come dine in or order takeout!</h3>
                <h1 className="shaded-box-text" id="phone-number">(916) 696 - 7718</h1>
            </>)
        }
    }
}

const ShadedBox = (props) => {
    const navigate = useNavigate();
    const tempDate = new Date()
    let curDatePST = new Date( tempDate.getUTCFullYear(), tempDate.getUTCMonth(), tempDate.getUTCDate(), tempDate.getUTCHours(), tempDate.getUTCMinutes(), tempDate.getUTCSeconds() )
    console.log("UTC", curDatePST)
    curDatePST.setHours(curDatePST.getHours() - 7)
    console.log("PST", curDatePST)
    return (
        <>
            <div id="shaded-box">
                {
                    getShadedBoxTexts(curDatePST)
                }
                {/* <h1 className="shaded-box-text" id="open-status">OPEN NOW FOR DINNER</h1>
                <h2 className="shaded-box-text" id="until-status">until 3:00pm</h2>
                <div id="shaded-box-spacing"><br/></div>
                <h3 className="shaded-box-text" id="misc-status">Come dine in or order takeout!<br/>(916) 696 - 7718</h3> */}
                <button id="menu-button" onClick={() => navigate('menu')}>MENU</button>
            </div>
            {/* <button id="menu-button">MENU</button> */}
        </>
    )
}

export default ShadedBox;