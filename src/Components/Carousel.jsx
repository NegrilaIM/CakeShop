import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import macaroons from '../Assets/macaroons.jpg'

function Example({autoplay})
{
    const items = [
        {
            name: <img 
                  className='img' 
                  src={macaroons} alt="" />,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: <img src={macaroons} alt="" />,
            description: "Hello World!"
        }
    ]

    return (
        <Carousel autoplay={autoplay}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p></p>
        </Paper>
    )
}

export default Example