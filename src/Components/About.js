import React from "react"

function about(){
    /*return(
        <div>
            About page
        </div>
    )*/
        return React.createElement("div",{id:"demo",className:"democlass"},
        React.createElement("h1",null,"About age")
        )

}
export default about