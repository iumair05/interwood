import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import { images } from '@/utils/ImagesData';
import { useRouter } from 'next/navigation';
import { routes } from '@/utils/routes';

export default function DiscoverMoreSection() {

    const router = useRouter();

    return (
        <Box className="bg-[#F7EEE7] py-10">

            <Box className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-start">
                {/* Text Section */}
                <Box className="bg-[#2F2F2F] text-white h-[300px] md:h-[400px] md:w-1/2 flex flex-col justify-center px-4">
                    <Typography
                        component="h2"
                        variant="h3"
                        className="font-semibold leading-tight mb-4"
                    >
                        Discover More
                    </Typography>

                    <Typography variant="body1" className="!mb-6 !mt-4 text-lg leading-relaxed">
                        Browse our wide selection of furniture, from cozy living-room pieces to
                        modern office solutions. Elevate your space with our high-quality,
                        stylish designs.
                    </Typography>

                    <Button
                        variant="outlined"
                        size="large"
                        onClick={() => router.push(routes.exploreHome)}
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
                <Box className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src={images.discoverMoreImage}
                        alt="Modern wooden bed with upholstered headboard"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </Box>
            </Box>
        </Box>
    );
}
