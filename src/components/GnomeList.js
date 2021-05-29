import React from 'react'

const GnomeList = ({elements}) => {
    return (
        <div>
            {elements.map((elements) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{elements.name}</h5>  
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GnomeList