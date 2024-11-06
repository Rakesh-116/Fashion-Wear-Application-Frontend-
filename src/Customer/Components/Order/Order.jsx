import React from 'react'
import OrderCard from './OrderCard'

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
]

const Order = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div className='flex justify-between w-full my-6'>
                <div className='w-1/4 mx-10'>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-20'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-4'>
                            <h1 className='font-semibold'>ORDER STATUS</h1>
                            {orderStatus.map((option) =>
                                <div className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        defaultValue={option.value}
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                        {option.label}
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='w-3/4'>
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((item) =>
                        <OrderCard />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Order