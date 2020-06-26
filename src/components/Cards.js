import React from 'react'
// material ui imports
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

function Cards({data, dragStart, dragOver, dragEnd}) {
    // replace with sellout functionality
    const sellOut = () => console.log("SELL OUT"); 
    // replace with topup functionality
    const topUp = () => console.log("TOP UP"); 
    return (
        <div>
            {data.map((holding, key) => (
                <Card id={key} key={key} style={{margin: '10px'}}
                draggable={true} onDragStart={dragStart} 
                onDragOver={dragOver} onDragEnd={dragEnd}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" 
                            style={{backgroundColor: '#aaa'}}>
                                {holding.bond[0]}
                            </Avatar>
                        }
                        title={holding.bond}
                        subheader={holding.size + ' ᛫ £' + holding.price}
                        action={
                            <div className='buttons'>
                                <button style={{marginTop: '6px', 
                                marginBottom: '4px'}}
                                onClick={() => sellOut()}>
                                    Sell Out
                                </button>
                                <br/>
                                <button onClick={() => topUp()}>
                                    Top Up
                                </button>
                            </div>
                        }
                    />
                </Card>
            ))}
        </div>
    )
}

export default Cards
