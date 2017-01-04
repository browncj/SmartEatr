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
          <hr/>
          <SetCal />
          <hr/>
          <NewDay />
        </div>
        <div className="small-6 columns">
          <GenerateCalDisplay />
          <hr/>
          <GenerateDayList />
        </div>
      </div>
    </div>
  );
};

export default SmartEatr;
