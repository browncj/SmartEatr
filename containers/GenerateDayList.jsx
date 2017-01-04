import {connect} from 'react-redux';
import DayList from 'DayList';

const mapStateToProps = (state) => {
  return state;
};

const GenerateDayList = connect(mapStateToProps)(DayList);

export default GenerateDayList;
