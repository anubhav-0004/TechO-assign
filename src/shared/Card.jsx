import React, { useState } from "react";

const Card = ({ title, description, img }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 animate-pulse" />
        )}
        <img
          src={img}
          alt={title}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
