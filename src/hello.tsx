import React, { useState } from 'react'
import { Radio, Space, Typography } from 'antd';
import type { RadioChangeEvent } from 'antd';

export function Hello() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: 20 }}>
      <Space direction="vertical" size="middle">
        <Typography.Text>请选择你喜欢的水果：</Typography.Text>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>苹果</Radio>
          <Radio value={2}>香蕉</Radio>
        </Radio.Group>
        <Typography.Text type="secondary">
          你选择了：{value === 1 ? '苹果' : '香蕉'}
        </Typography.Text>
      </Space>
    </div>
  );
}
