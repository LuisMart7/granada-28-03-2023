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
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {orders} orders
        </Typography>
        </CardContent>
    </div>
    <div className='carta2'>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {uds} unidades
        </Typography>
        </CardContent>
    </div>
    <div className='carta3'>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {sales} ventas
        </Typography>
        </CardContent>
    </div>
    </div>
    </React.Fragment>
  )
};
