# 尺寸

- order: 1

通过 `size` 属性可以控制评分组件的大小，支持三种尺寸 `small`, `medium`, `large`。
默认尺寸为 `medium` 。

:::lang=en-us
# Size

- order: 1

You can controll the size of rating component by `size` attribute, and there are three options: `small`, `medium`, `large`, the default value is `medium`.

:::
---


````jsx
import { Rating } from '@alifd/next';

ReactDOM.render(<div>
    <Rating defaultValue={3.2} size="small" />
    <br/>
    <br/>
    <Rating defaultValue={3.2} />
    <br/>
    <br/>
    <Rating defaultValue={3.2} size="large" />
</div>, mountNode);
````
