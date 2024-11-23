# Ant Design Custom Radio Demo

这个项目演示了如何基于 Ant Design 的 Radio 组件创建自定义单选框组件。

## 功能特点

- 基于 Ant Design Radio 组件封装
- 自定义选中状态样式：使用勾号(✓)替代默认圆点
- 使用 @emotion/css 实现样式定制
- 完全类型安全（TypeScript）

## 技术栈

- React 18
- TypeScript
- Ant Design 5
- @emotion/css
- Vite

## 运行项目

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 使用方法

CustomRadio 组件可以像普通的 Ant Design Radio 组件一样使用：

```tsx
import { Radio } from 'antd';
import { CustomRadio } from './CustomRadio';

function Example() {
  const [value, setValue] = useState(1);

  return (
    <Radio.Group value={value} onChange={e => setValue(e.target.value)}>
      <CustomRadio value={1}>选项1</CustomRadio>
      <CustomRadio value={2}>选项2</CustomRadio>
    </Radio.Group>
  );
}
```

## 自定义样式说明

组件使用 @emotion/css 实现样式定制，主要改动：
- 选中状态显示白色勾号
- 选中状态背景为蓝色填充
- 保持了与 Ant Design 的样式系统的一致性
