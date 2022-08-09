import React from 'react';
import moment from "moment";
import {Monitor} from "../Monitor";
import {Header} from "../Header";
import {CalendarGrid} from "../Calendar";

function Index() {

  // moment.updateLocale('en', {week: {dow: 1}});
  // const startDay = moment().startOf('month').startOf('week');
  // const endDay = moment().endOf('month').endOf('week');

  // const calendar = [
  //   [1,2,3,4],
  //   [],
  //   [],
  //   [],
  //   []
  // ];
  // const day = startDay.clone();
  //
  // while (!day.isAfter(endDay)){
  //   calendar.push(day.clone());
  //   day.add(1, 'day')
  // }
  //
  // console.log(calendar);
  // window.moment = moment;
  // window.startDay = startDay;
  // window.endDay = endDay;
  // window.day = day;

  return (
      <div>
          <Header/>
          <Monitor/>
          <CalendarGrid/>
      </div>
  );
}

export default Index;
