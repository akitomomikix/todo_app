import React from 'react';

interface DateProps {
  year: number;
  month: number;
  day: number;
}

const Date: React.FC<DateProps> = (props) => {
  const dateTextStyle = {
    color: 'gray',
    fontSize: 'small'
  };

  return (
    <div style={dateTextStyle}>
      作成日: {props.year}年{props.month}月{props.day}日
    </div>
  );
};

export default Date;
