import React from 'react';
import NewDay from 'NewDay';
import SetCal from 'SetCal';
import AddFood from 'AddFood';
import GenerateCalDisplay from 'GenerateCalDisplay';
import GenerateDayList from 'GenerateDayList';

const SmartEatr = () => {

  return (
    <div>
      <NewDay />
      <AddFood />
      <SetCal />
      <GenerateCalDisplay />
      <GenerateDayList />
    </div>
  );
};

export default SmartEatr;
