import React from 'react';
import Cards from './Cards';

function Display({data}) {
    const drag = event => event.preventDefault();
    const drop = event => {
        event.preventDefault();
        const card_id = event.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.visibility = "visible";
        event.target.appendChild(card);
    }
    // card functions
    const dragStart = event => {
        const target = event.target; // store event obj to prevent null
        event.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.visibility = "hidden";
        }, 0); // to only make invisable after grabbing action
    }
    const dragOver = event => {
        event.stopPropagation(); // prevents other events so cards dragging into other cards
    }
    const dragEnd = event => event.target.style.visibility = "visible"
    return (
        <div onDragOver={drag} onDrop={drop}>
            <h3 style={{textAlign: 'left', paddingLeft: '1rem', 
            color: '#444', marginBottom: 0}}>
                Holdings Information
            </h3>
            <p style={{color: '#888', fontSize: '14px',
            borderStyle: 'dashed', borderWidth: '1px',
            padding: '10px', marginLeft: '0.4rem', 
            marginTop: '10px'}}>
                Drag Items Here
            </p>
            <Cards data={data} dragStart={dragStart} 
            dragOver={dragOver} dragEnd={dragEnd}/>
        </div>
    )
}

export default Display
