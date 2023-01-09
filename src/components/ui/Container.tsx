import React from 'react'

const Container:React.FC = (props) => {
    return (
        <div className="container-sm">
            {props.children}
        </div>
    )
}

export default Container
