import React from 'react'
// material ui imports
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

function Cards({data, dragStart, dragOver}) {
    const sellOut = () => {
        console.log("SELL OUT"); // replace with sellout functionality
    }
    const topUp = () => {
        console.log("TOP UP"); // replace with topup functionality
    }
    return (
        <div>
            {data.map((holding, key) => (
                <Card id={key} key={key} style={{margin: '10px'}}
                draggable={true}
                onDragStart={dragStart} onDragOver={dragOver}>
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
