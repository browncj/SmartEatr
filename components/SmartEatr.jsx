import React from 'react';
import NavBar from 'NavBar';
import NewDay from 'NewDay';
import SetCal from 'SetCal';
import AddFood from 'AddFood';
import GenerateCalDisplay from 'GenerateCalDisplay';
import GenerateDayList from 'GenerateDayList';

const SmartEatr = () => {

  return (
    <div>
      <NavBar />
      <NewDay />
      <AddFood />
      <SetCal />
      <GenerateCalDisplay />
      <GenerateDayList />
    </div>
  );
};

export default SmartEatr;
