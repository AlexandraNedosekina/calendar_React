import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {Table, Tr, Td, Tbody} from "../Table";

import arrow from '../../img/arrow.svg';

const Monitor = styled(Td)`
  cursor: pointer;
`;

const MonitorName = styled.div`
  text-align: center;
  padding: 7px 0;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const MonValue = styled.div`
  text-align: center;
  width: 50px;
  height: 50px;
  margin: auto;
  line-height: 50px;
  font-weight: bold;
  font-size: 26px;
  ${({ active }) =>
    active &&
    `
    border-radius:25px;
    background-color:red;
    color: #fff;
  `}
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
`;

const MonTd = styled(Td)`
  @media (max-width: 600px) {
    height: 45px;
  }
`;

const MonCurrentMonth = styled.td`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const NextWeek = styled.div`
  background-image: url(${arrow});
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 40px;
  height: 40px;
  margin: auto;
  cursor: pointer;
  @media (max-width: 600px) {
    background-size: 20px 20px;
    width: 30px;
    height: 30px;
  }
`;

const PrevWeek = styled(NextWeek)`
  transform: rotate(180deg);
`;

class Nav extends Component {
    render() {
        let startOfWeek = moment(this.props.date).startOf('isoWeek');
        let endOfWeek = moment(this.props.date).endOf('isoWeek');

        const days = [];
        let day = startOfWeek;

        while (day <= endOfWeek) {
            days.push(
                <Monitor
                    onClick={e => this.props.changeDay(e)}
                    key={day}
                    data-date={day.toISOString()}
                >
                    <MonitorName>{day.format('dd')[0]}</MonitorName>
                    <MonValue active={moment().isSame(day, 'day')}>
                        {day.date()}
                    </MonValue>
                </Monitor>
            );

            day = day.clone().add(1, 'd');
        }

        return (
            <Table>
                <Tbody>
                    <Tr>
                        <Td />
                        {days}
                    </Tr>
                    <Tr>
                        <MonTd />
                        <MonTd>
                            <PrevWeek onClick={() => this.props.prevWeek()} />
                        </MonTd>
                        <MonCurrentMonth colSpan="5">
                            {this.props.date.format('MMMM YYYY')}
                        </MonCurrentMonth>
                        <MonTd>
                            <NextWeek onClick={() => this.props.nextWeek()} />
                        </MonTd>
                    </Tr>
                </Tbody>
            </Table>
        );
    }
}

export {Nav};