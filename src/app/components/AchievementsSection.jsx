"use client";

import React, { useState, useEffect } from 'react';

const AchievementsSection = () => {
  const achievementsList = [
    {
      metric: 'Projects',
      value: '100',
      postfix: '+',
    },
    {
      prefix: '~',
      metric: 'Users',
      value: '1000',
    },
    {
      metric: 'Awards',
      value: '7',
    },
    {
      metric: 'Years',
      value: '5',
    },
  ];

  const [animatedValues, setAnimatedValues] = useState(
    achievementsList.map((achievement) => 0)
  );
  useEffect(() => {
    const animateValues = () => {
      for (let i = 0; i < achievementsList.length; i++) {
        const achievement = achievementsList[i];
        const targetValue = Number(achievement.value);

        if (achievement.metric === 'Users') {
          // Increment the animated value for 'Users' by 30
          let progress = 0;
          const interval = setInterval(() => {
            progress += 10;
            const currentValue = Math.min(progress, targetValue);
            setAnimatedValues((prevValues) => {
              const updatedValues = [...prevValues];
              updatedValues[i] = currentValue;
              return updatedValues;
            });

            if (progress === targetValue) {
              clearInterval(interval);
            }
          }, 1); // Adjust interval duration for desired animation speed
        } else {
          // Use the original animation logic for other metrics
          let progress = 0;
          const interval = setInterval(() => {
            progress += 1;
            const currentValue = Math.min(progress, targetValue);
            setAnimatedValues((prevValues) => {
              const updatedValues = [...prevValues];
              updatedValues[i] = currentValue;
              return updatedValues;
            });

            if (progress === targetValue) {
              clearInterval(interval);
            }
          }, 1); // Adjust interval duration for desired animation speed
        }
      }
    };

    animateValues();
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              {typeof animatedValues[index] === 'function'
                ? animatedValues[index]() // Render the animated number for Users
                : animatedValues[index]}
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;



// Usage:
// <AchievementsList achievements={achievementsList} />



// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers");
//   },
//   { ssr: false }
// );


// const AchievementsSection = () => {
//   return (
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {achievementsList.map((achievement, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
//             >
//               <h2 className="text-white text-4xl font-bold flex flex-row">
//                 {achievement.prefix}
//                 <AnimatedNumbers
//                   includeComma
//                   animateToNumber={parseInt(achievement.value)}
//                   locale="en-US"
//                   className="text-white text-4xl font-bold"
//                   configs={(_, index) => {
//                     return {
//                       mass: 1,
//                       friction: 100,
//                       tensions: 140 * (index + 1),
//                     };
//                   }}
//                 />
//                 {achievement.postfix}
//               </h2>
//               <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;
