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
      <div className="row medium-unstack">
        <div className="small-6 columns">
          <AddFood />
          <SetCal />
          <NewDay />
        </div>
        <div className="small-6 columns">
          <GenerateCalDisplay />
          <GenerateDayList />
        </div>
      </div>
    </div>
  );
};

export default SmartEatr;
