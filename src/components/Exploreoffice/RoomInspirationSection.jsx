import React from "react";
import Image from "next/image";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { RoomInspirationImages } from "@/utils/ImagesData";
const rooms = [
  {
    title: "Modern Living Room",
    description:
      "Clean lines and minimalist design create a calming space for relaxation and entertainment.",
    image:
      RoomInspirationImages.Room1,
  },
  {
    title: "Serene Bedroom",
    description:
      "Soft textures and neutral tones create the perfect sanctuary for restful sleep.",
    image:
      RoomInspirationImages.Room2,
  },
];

const RoomCard = ({ title, description, image }) => (
  <Card
    elevation={0}
    className="w-full md:w-[500px] !rounded-2xl overflow-hidden shadow-md" 
  >
    <Box className="relative h-[260px] md:h-[300px]">
      
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
      />
    </Box>

    <CardContent className="p-6"> 
      <Typography
        variant="h6"
        component="h3"
        className="font-semibold text-lg md:text-xl text-gray-900 mb-2 md:!mt-14"
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        className="text-sm md:text-base text-gray-600 leading-snug mb-6"
      >
        {description}
      </Typography>

      <Button
        variant="text"
        endIcon={<ArrowForwardIcon fontSize="small" />}
        className="!normal-case px-0 font-medium text-sm md:text-base"
      >
        Shop This Look
      </Button>
    </CardContent>
  </Card>
);

const RoomInspirationSection = () => {
  return (
    <section className="w-full py-12 md:py-14 max-w-6xl mx-auto">
      <div className="container mx-auto px-4 md:px-8">
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Room Inspiration
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center">
          {rooms.map((room) => (
            <RoomCard key={room.title} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomInspirationSection;
