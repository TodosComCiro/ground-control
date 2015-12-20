import React from 'react';
import {DatePicker} from 'material-ui';
import {BernieText} from '../styles/bernie-css';
import moment from 'moment';

export default class GCDateField extends React.Component {
  render() {
    let floatingLabelText = this.props.floatingLabelText || this.props.label
    let oldDate = moment(this.props.value);
    return <DatePicker
      {...this.props}
      floatingLabelText={floatingLabelText}
      hintText={this.props.label}
      onChange={(_, date) => {
        let newDate = moment(date);
        newDate.set('hour', oldDate.get('hour'))
        newDate.set('minute', oldDate.get('minute'))
        newDate.set('second', oldDate.get('second'))
        this.props.onChange(newDate.toDate())
      }}
    />
  }
}