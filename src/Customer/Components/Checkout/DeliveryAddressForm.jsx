import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, TextField } from '@mui/material'

const DeliveryAddressForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            streetAddress: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zip'),
            mobile: data.get('phoneNumber')
        }
        console.log('Form submitted', address)
    }


    return (
        <div>
            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-1/3 border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-6 border-b cursor-pointer'>
                        <AddressCard />
                        <Button
                            sx={{ mt: 2, bgcolor: 'RGB(145 85 253)', color: "white", width: "200px" }}
                            size='large'
                            variant='contained'
                        >
                            Deliver Here
                        </Button>
                    </div>
                </div>

                <div className='w-full lg:w-2/3 mt-6 lg:mt-0 lg:px-4'>
                    <div className='border rounded-s-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col w-full'>
                                <div className='flex flex-col md:flex-row justify-evenly'>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name'
                                        sx={{ marginX: "8px" }}
                                    />
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='given-name'
                                        sx={{ marginX: "8px" }}
                                    />
                                </div>

                                <div className='my-6 mx-2'>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete='address'
                                        multiline
                                        rows={4}
                                    />
                                </div>

                                <div className='flex flex-col md:flex-row justify-evenly mb-6'>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete='city'
                                        sx={{ marginX: "8px" }}
                                    />
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State / Province / Region"
                                        fullWidth
                                        autoComplete='state'
                                        sx={{ marginX: "8px" }}
                                    />
                                </div>

                                <div className='flex flex-col md:flex-row justify-evenly mb-6'>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip / Postal code"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                        sx={{ marginX: "8px" }}
                                    />
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete='phoneNumber'
                                        sx={{ marginX: "8px" }}
                                    />
                                </div>

                                <Button
                                    sx={{ mt: 2, bgcolor: 'RGB(145 85 253)', color: "white", width: "200px" }}
                                    size='large'
                                    variant='contained'
                                    type='submit'
                                >
                                    Deliver Here
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeliveryAddressForm