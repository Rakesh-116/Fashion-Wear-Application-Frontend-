import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box } from '@mui/material';

const OrderDetails = () => {
    return (
        <div className='px-5 lf:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <div className='space-y-5 flex flex-col px-6'>
                {[1, 1, 1, 1, 1].map((item) =>
                    <div className='w-full flex items-center justify-between shadow-xl rounded-md p-5 border'>
                        <div className=''>
                            <div className='flex items-center space-x-4'>
                                <img
                                    className='w-[5rem] h-[5rem] object-cover object-top'
                                    src='https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70'
                                    alt=''
                                />
                                <div className='space-y-2'>
                                    <p className='font-semibold'>Men Slim Mid ries</p>
                                    <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                        <span>Color: pink</span>
                                        <span>Size: M</span>
                                    </p>
                                    <p>Seller: linaria</p>
                                    <p>$1099</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Box sx={{ color: deepPurple[500] }}>
                                <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
                                <span>Rate & Review Product</span>
                            </Box>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OrderDetails