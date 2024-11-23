import React from 'react';
import { Radio } from 'antd';
import type { RadioProps } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import './CustomRadio.css';

export function CustomRadio(props: RadioProps) {
  return (
    <Radio {...props} className="custom-radio">
      <span className="radio-content">
        {props.children}
      </span>
    </Radio>
  );
}
