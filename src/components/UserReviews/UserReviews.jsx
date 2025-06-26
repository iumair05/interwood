import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { Star, StarBorder, FormatQuote } from '@mui/icons-material';

const reviews = [
  {
    id: 1,
    name: 'Fahad K.',
    rating: 5,
    text: 'Absolutely love my new sofa! Super comfy, great quality, and it arrived right on time. Can’t stop getting compliments from friends!',
    avatar: 'https://oodp.ca/media/tutor-8.jpg',
  },
  {
    id: 2,
    name: 'Sara K.',
    rating: 4,
    text: 'Absolutely love my new sofa! Super comfy, great quality, and it arrived right on time. Can’t stop getting compliments from friends!',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQP_T5baABEed0mGtfTaQMZtv8JzuRbHxNxA&s',
  },
  {
    id: 3,
    name: 'Neni K.',
    rating: 3,
    text: 'Absolutely love my new sofa! Super comfy, great quality, and it arrived right on time. Can’t stop getting compliments from friends!',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ZHAO_LUSI_%28%E8%B6%99%E9%9C%B2%E6%80%9D%29_P1.jpg/250px-ZHAO_LUSI_%28%E8%B6%99%E9%9C%B2%E6%80%9D%29_P1.jpg',
  },
  {
    id: 4,
    name: 'Zain K.',
    rating: 5,
    text: 'Absolutely love my new sofa! Super comfy, great quality, and it arrived right on time. Can’t stop getting compliments from friends!',
    avatar: 'https://ntvb.tmsimg.com/assets/assets/163901_v9_ba.jpg',
  },
];

// Duplicate reviews to simulate infinite loop
const infiniteReviews = [...reviews, ...reviews];

const Stars = ({ value }) =>
  [...Array(5)].map((_, i) =>
    i < value ? (
      <Star key={i} fontSize="small" className="text-yellow-400" />
    ) : (
      <StarBorder key={i} fontSize="small" className="text-yellow-400" />
    )
  );

const UserReviews = () => {
  return (
    <section className="bg-[#F6F0EB] py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Typography
          variant="h4"
          component="h2"
          className="!mb-10 text-center !font-bold !text-3xl sm:!text-4xl"
        >
          What People Are Saying About Us
        </Typography>

        <div className="relative">
          <div className="flex gap-6 animate-marquee whitespace-nowrap w-max">
            {infiniteReviews.map((r, i) => (
              <article
                key={i}
                className="relative flex w-80 flex-col !rounded-tl-[36px] !rounded-br-[36px] bg-[#F9F5F1] p-6 pb-10 shadow-sm shrink-0"
                style={{
                  boxShadow:
                    '0px -3px 0px 0px #B89D7E55 inset, 0px 7px 13px -3px #B89D7ECC, 0px 2px 4px 0px #B89D7EFF',
                  borderBottom: '8px solid #B89D7E',
                }}
              >
                <span className="absolute -top-5 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#B49473] text-white shadow-md">
                  <FormatQuote fontSize="small" />
                </span>
                <div className="mb-4 flex">
                  <Stars value={r.rating} />
                </div>
                {/* <p className="mb-8 text-sm leading-relaxed text-gray-700">{r.text}</p> */}
                <div className="mt-auto flex items-center space-x-3">
                  <Avatar alt={r.name} src={r.avatar} sx={{ width: 48, height: 48 }} />
                  <Typography variant="subtitle2" className="font-semibold">
                    {r.name}
                  </Typography>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind keyframe animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default UserReviews;
