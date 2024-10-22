import { Typography } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';

const Footer = () => {
    return (
        <div className="bg-black text-white text-center mt-10 p-6">
            <div className='flex flex-wrap justify-center'>
                <div style={{ flex: '1 1 25%', padding: '16px' }}>
                    <Typography variant='h6' className='pb-5'>Company</Typography>

                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Jobs</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Partners</Button>
                    </div>
                </div>

                <div style={{ flex: '1 1 25%', padding: '16px' }}>
                    <Typography variant='h6' className='pb-5'>Solutions</Typography>

                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Marketing</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Analytics</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Commerce</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Insights</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Support</Button>
                    </div>
                </div>

                <div style={{ flex: '1 1 25%', padding: '16px' }}>
                    <Typography variant='h6' className='pb-5'>Documentation</Typography>

                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>API Status</Button>
                    </div>
                </div>

                <div style={{ flex: '1 1 25%', padding: '16px' }}>
                    <Typography variant='h6' className='pb-5'>Legal</Typography>

                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Claim</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Privacy</Button>
                    </div>
                    <div>
                        <Button variant='h6' className='pb-5' gutterBottom>Terms</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;