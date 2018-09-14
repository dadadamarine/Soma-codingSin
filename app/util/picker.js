
import 'rc-calendar/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DatePicker from 'rc-calendar/lib/Picker';

import koKR from 'rc-calendar/lib/locale/ko_KR';
import enUS from 'rc-calendar/lib/locale/en_US';

import moment from 'moment';
import 'moment/locale/ko';
import 'moment/locale/en-gb';
const format = 'YYYY-MM-DD';

const fullFormat = 'YYYY-MM-DD dddd';
const ko = location.search.indexOf('ko') !== -1;

const now = moment();
if (ko) {
  now.locale('ko').utcOffset(9);
} else {
  now.locale('en-gb').utcOffset(0);
}

export default class Picker extends React.Component {
  state = {
    hoverValue: [],
  };

  onHoverChange = (hoverValue) => {
    console.log(hoverValue);
    this.setState({ hoverValue });
  }

  render() {
    const props = this.props;
    const { showValue } = props;
    const calendar = (
      <RangeCalendar
        hoverValue={this.state.hoverValue}
        onHoverChange={this.onHoverChange}
        type={this.props.type}
        locale={ko ? koKR : enUS}
        defaultValue={now}
        format={format}
        onChange={props.onChange}
        disabledDate={props.disabledDate}
      />);
    return (
      <DatePicker
        open={this.props.open}
        onOpenChange={this.props.onOpenChange}
        calendar={calendar}
        value={props.value}
      >
        {
          () => {
            return (
              <span>
                <input
                  placeholder="강의 기간"
                  style={{ width: 250 }}
                  readOnly
                  value={showValue && showValue.format(fullFormat) || ''}
                />
                </span>
            );
          }
        }
      </DatePicker>);
  }
}