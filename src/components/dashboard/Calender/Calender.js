import React from 'react';
import './Calender.css';
import moment from 'moment'


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



const Heading = ({date, changeMonth, resetDate}) => (
    <nav className="calendar--nav">
      {/* <a onClick={() => changeMonth(date.month() - 1)}>&#8249;</a> */}
      <h3 style= {{fontFamily: "Inter"}} onClick={() => console.log('reset disabled')}>{date.format('MMMM')} <small style= {{fontFamily: "Inter"}}>{date.format('YYYY')}</small></h3>
      {/* <a onClick={() => changeMonth(date.month() + 1)}>&#8250;</a> */}
    </nav>
  );


  
  const Day = ({currentDate, date, startDate, endDate, onClick}) => {
    const s = ['red', 'green', 'yellow']

    const n = randomInteger(0,2)
  
    let className = ['active', s[n]];
   

  
    // if (moment().isSame(date, 'day')) {
    //   className.push('active');
    // }
  
    if (date.isSame(startDate, 'day')) {
      className.push('start');
     
    }
  
    if (date.isBetween(startDate, endDate, 'day')) {
      className.push('between');
    }
  
    if (date.isSame(endDate, 'day')) {
      className.push('end');
    }
  
    if (! date.isSame(currentDate, 'month')) {
      className.push('muted');
    }
  
    return (
     
        <span style= {{fontFamily: "Inter", fontWeight: "500"}} onClick={() => onClick(date)} currentDate={date} className={className.join(' ')}>{date.date()}</span>
      
      
    )
  };
  
  const Days = ({date, startDate, endDate, onClick}) => {
    const thisDate = moment(date);
    const daysInMonth = moment(date).daysInMonth();
    const firstDayDate = moment(date).startOf('month');
    const previousMonth = moment(date).subtract(1, 'month');
    const previousMonthDays = previousMonth.daysInMonth();
    const nextsMonth = moment(date).add(1, 'month');
    let days = [];
    let labels = [];
  
    for (let i = 1; i <= 7; i++) {
      labels.push(<span className="label">{(moment().day(i).format('ddd')).slice(0,1)}</span>);
    }
  
    for (let i = firstDayDate.day(); i > 1; i--) {
      previousMonth.date(previousMonthDays - i + 2);
  
      days.push(
        <Day key={moment(previousMonth).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(previousMonth)} startDate={startDate} endDate={endDate} />
      );
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      thisDate.date(i);
  
      days.push(
        <Day key={moment(thisDate).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(thisDate)} startDate={startDate} endDate={endDate} />
      );
    }
  
    const daysCount = days.length;
    for (let i = 1; i <= (42 - daysCount); i++) {
      nextsMonth.date(i);
      days.push(
        <Day key={moment(nextsMonth).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(nextsMonth)} startDate={startDate} endDate={endDate} />
      );
    }
  
    return (
      <nav className="calendar--days">
        {labels.concat()}
        {days.concat()}
      </nav>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) { 
      super(props);
     
  
      this.state = {
        // date: moment(),
        date: moment().month(props.mon),
        startDate: moment().subtract(5, 'day'),
        startDate2: null,
        endDate2:null,
        endDate: moment().add(3, 'day')
      };
    }
  
    resetDate() {
      this.setState({
        date: moment()
      });
    }
  
    changeMonth(month) {
        console.log(month)
      const {date} = this.state;
  
      date.month(month);
  
      this.setState(
        date
      );
    }
  
    changeDate(date) {
      let {startDate, endDate, startDate2, endDate2} = this.state;

      console.log(date)
      console.log(startDate)
      console.log(endDate)
      // console.log(date)
      
  
      // if (startDate === null || date.isBefore(startDate, 'day') || ! startDate.isSame(endDate, 'day')) {
      //   startDate = moment(date);
      //   endDate = moment(date);
      // } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
      //   startDate = null;
      //   endDate = null;
      // } else if (date.isAfter(startDate, 'day')) {
      //   endDate = moment(date);
      // }


      
        if (startDate === null || date.isBefore(startDate, 'day') || ! startDate.isSame(endDate, 'day')) {
          startDate = moment(date);
          endDate = moment(date);
        } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
          startDate = null;
          endDate = null;
        } else if (date.isAfter(startDate, 'day')) {
          endDate = moment(date);
        }
      

      
      



  
      this.setState({
        startDate,
        endDate
      });
    }
  
    render() {
     
      const {date, startDate, endDate} = this.state;
  
      return (
        <div className="calendar2">
          <Heading date={date} changeMonth={(month) => this.changeMonth(month)} resetDate={() => this.resetDate()} />

          <Days onClick={(date) => this.changeDate(date)} date={date} startDate={startDate} endDate={endDate} />
        </div>
      );
    }
  }




  export default Calendar;





// function AssignmentsCardsSkeleton() {
//     return (
        
//         <div class="jzdbox1 jzdbasf jzdcal">

// <div className="jzdcalt">June 2017</div>

// <span>Su</span>
// <span>Mo</span>
// <span>Tu</span>
// <span>We</span>
// <span>Th</span>
// <span>Fr</span>
// <span>Sa</span>


// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span>1</span>
// <span className="circle" data-title="My 25th birthday!">2</span>
// <span>3</span>
// <span>4</span>
// <span>5</span>
// <span>6</span>
// <span>7</span>
// <span>8</span>
// <span>9</span>
// <span>10</span>
// <span>11</span>
// <span className="circle" data-title="2 month anniversary!">12</span>
// <span>13</span>
// <span>14</span>
// <span>15</span>
// <span>16</span>
// <span>17</span>
// <span>18</span>
// <span>19</span>
// <span>20</span>
// <span>21</span>
// <span className="circle" data-title="#MusicMonday - share your favorite song!">22</span>
// <span>23</span>
// <span>24</span>
// <span>25</span>
// <span>26</span>
// <span>27</span>
// <span>28</span>
// <span>29</span>
// <span>30</span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// <span className="jzdb"></span>
// </div>
//     ) 

// }

// export default AssignmentsCardsSkeleton


