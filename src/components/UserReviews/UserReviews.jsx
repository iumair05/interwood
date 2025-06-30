'use client';

import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { Star, StarBorder, FormatQuote } from '@mui/icons-material';
import { reviews } from '@/utils/data';

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
    <section className="bg-primaryBg py-12 overflow-hidden">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Typography
          variant="h4"
          component="h2"
          className="!mb-10 text-center !font-bold !text-3xl sm:!text-4xl"
        >
          What People Are Saying About Us
        </Typography>

        <div className="relative">
          <div className="flex gap-6 animate-marquee w-max">
            {infiniteReviews.map((review, i) => (
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
                  <Stars value={review.rating} />
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-700 break-words line-clamp-4">
                  {review.text.slice(0, 100) + '...'}
                </p>

                <div className="mt-auto flex items-center space-x-3">
                  <Avatar alt={review.name} src={review.avatar} sx={{ width: 48, height: 48 }} />
                  <Typography variant="subtitle2" className="font-semibold">
                    {review.name}
                  </Typography>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Keyframe Animation */}
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