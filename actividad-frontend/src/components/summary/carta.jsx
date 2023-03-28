import * as React from 'react';
import {useState} from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./card.css";


export const CartaD = ({}) => {
    const [orders, setOrders] = useState(0);
    const [uds, setUds] = useState(0);
    const [sales, setSales] = useState(0);

    React.useEffect(() => {
            fetch("/report-summary")
            .then((response => response.json()))
            .then(data => {
                setOrders(data['totalOrders']);
                setUds(data['totalOrders']);
                setSales(data['totalSales']);
            });

    }, [orders, uds, sales]);

  return (
    
    <React.Fragment>
        <div className='cartas'>
    <div className='carta'>
        <CardContent>
        <Typography sx={{ fontSize: 36 }} color="text.secondary" gutterBottom align='center'>
            {orders}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align='center'>
            pedidos
        </Typography>
        </CardContent>
    </div>
    <div className='carta'>
        <CardContent>
        <Typography sx={{ fontSize: 36 }} color="text.secondary" gutterBottom align='center'>
            {uds}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align='center'>
            unidades
        </Typography>
        </CardContent>
    </div>
    <div className='carta'>
        <CardContent>
        <Typography sx={{ fontSize: 36 }} color="text.secondary" gutterBottom align='center'>
            {sales}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align='center'>
            importes
        </Typography>
        </CardContent>
    </div>
    </div>
    </React.Fragment>
  )
};
