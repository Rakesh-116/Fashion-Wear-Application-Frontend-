import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 mr-6 shadow  hover:shadow-2xl border mb-2'>
            <div className='flex justify-between'>
                <div className='w-2/4'>
                    <div className='flex cursor-pointer'>
                        <img
                            className='w-[5rem] h-[5rem] object-cover object-top'
                            src='https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70' alt='' />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Skim Mid</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Colo: Black</p>
                        </div>

                    </div>
                </div>
                <div className='w-1/4'>
                    <p>$1099</p>
                </div>
                <div className='w-1/4'>
                    {true &&
                        <div>
                            <p className='flex items-center'>
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2' />
                                <span>Delivered On March 03</span>
                            </p>
                            <p className='text-xs'>Your Item Has Been Delivered</p>
                        </div>
                    }
                    {false && <p>
                        <span>Expected Delivered On March 03</span>
                    </p>}
                </div>

            </div>
        </div>
    )
}

export default OrderCard