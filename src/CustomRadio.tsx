import React from 'react';
import { Radio } from 'antd';
import type { RadioProps } from 'antd';
import { css } from '@emotion/css';

const radioStyles = css`
  .ant-radio {
    position: relative;
  }

  .ant-radio-checked .ant-radio-inner {
    background-color: #1890ff;
  }

  .ant-radio-checked .ant-radio-inner::after {
    transform: scale(0);
  }

  .ant-radio-checked .ant-radio-inner::before {
    content: '✓';
    position: absolute;
    top: -2px;
    left: 2px;
    font-size: 12px;
    color: white;
  }
`;

export function CustomRadio(props: RadioProps) {
  return (
    <Radio {...props} className={radioStyles}>
      <span className="radio-content">
        {props.children}
      </span>
    </Radio>
  );
}
