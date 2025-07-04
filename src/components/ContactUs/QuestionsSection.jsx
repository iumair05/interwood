"use client";
import CustomButton from "@/commons/CustomButton";
import React from "react";

const QuestionsSection = () => {
  return (
    <div className="py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Still have questions? Let's talk!
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        Our design consultants are ready to help you create the perfect space
        that reflects your personal style and meets your functional needs.
      </p>
      <CustomButton text="Explore Our Collection" />
    </div>
  );
};

export default QuestionsSection;
