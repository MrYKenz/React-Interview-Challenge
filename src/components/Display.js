import React from 'react'
// material ui imports
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

function Display({data}) {
    const sellOut = () => {
        // sellout functionality
        console.log("sell out")
    }
    const topUp = () => {
        // topup functionality
        console.log("top up")
    }
    return (
        <div>
            <h3 style={{textAlign: 'left', paddingLeft: '1rem', color: '#444'}}>
                Holdings Information
            </h3>
            {data.map((holding, key) => (
                <Card key={key} style={{margin: '10px'}}>
                    <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" style={{backgroundColor: '#aaa'}}>
                        {holding.bond[0]}
                    </Avatar>
                    }
                    title={holding.bond}
                    subheader={holding.size + ' ᛫ £' + holding.price}
                    action={
                        <div className='buttons'>
                            <button style={{marginTop: '6px', marginBottom: '4px'}}
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

export default Display
