import React from 'react';
import GenerateCalDisplay from 'GenerateCalDisplay';
import DayList from 'DayList';

const SmartEatr = () => {
  let days = [
    {
      id: 1,
      foods: [
        {
          id: 1,
          name: 'Chocolate Pie',
          carbs: 24,
          protein: 1,
          fat: 23
        },
        {
          id: 2,
          name: 'Crisps',
          carbs: 24,
          protein: 1,
          fat: 23
        }
      ]
    },
    {
      id: 2,
      foods: [
        {
          id: 5,
          name: 'Tuna sandwich',
          carbs: 1,
          protein: 42,
          fat: 0
        },
        {
          id: 6,
          name: 'Chicken sandwich',
          carbs: 1,
          protein: 4,
          fat: 10
        },
        {
          id: 432,
          name: 'Candy bar',
          carbs: 3,
          protein: 1,
          fat: 23
        }
      ]
    },
    {
      id: 3,
      foods: [
        {
          id: 5,
          name: 'Light salad',
          carbs: 12,
          protein: 0,
          fat: 0
        },
        {
          id: 6,
          name: 'Chicken sandwich',
          carbs: 1,
          protein: 4,
          fat: 1
        }
      ]
    },
  ];

  return (
    <div>
      <GenerateCalDisplay />
      <DayList days={days}/>
    </div>
  );
};

export default SmartEatr;
