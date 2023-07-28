import React from "react";
function Child({ count }) {
    console.log("Child component being rendered")
    return (
        <>
            <h3>This is child count: { count }</h3>
        </>
    )
}

export default React.memo(Child);