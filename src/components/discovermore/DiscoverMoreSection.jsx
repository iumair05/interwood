import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import DiscoverMoreImage from '../explorehomeImages/discoverMoreImage.png';

export default function DiscoverMoreSection() {
    return (
        <Box className="bg-[#F7EEE7] py-10">
            <Box className="mx-auto max-w-7xl flex flex-col md:flex-row items-start">
                {/* Text Section */}
                <Box className="bg-[#2F2F2F] text-white md:w-1/2 p-8 flex flex-col justify-center h-auto md:mt-24">
                    <Typography
                        component="h2"
                        variant="h3"
                        className="font-semibold leading-tight mb-4"
                    >
                        Discover More
                    </Typography>

                    <Typography variant="body1" className="mb-6 text-lg leading-relaxed">
                        Browse our wide selection of furniture, from cozy living-room pieces to
                        modern office solutions. Elevate your space with our high-quality,
                        stylish designs.
                    </Typography>

                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            alignSelf: 'start',
                            color: '#fff',
                            borderColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.08)',
                                borderColor: '#fff',
                            },
                        }}
                    >
                        View Collection
                    </Button>
                </Box>


                {/* Image Section */}
                <Box className="relative md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src={DiscoverMoreImage}
                        alt="Modern wooden bed with upholstered headboard"
                        fill
                        className="object-cover"
                        priority
                    />
                </Box>
            </Box>
        </Box>
    );
}
