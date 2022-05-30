# 看源码技巧

先看测试用例

src目录下实现


## v-for 不写key时，怎么处理

patchUnkeyedChildren逻辑

旧VNode, 新VNode
获取新旧VNode的长度，最小值

进行patch

如果旧VNode长度大于新VNode长度
  卸载多余的旧VNode
否则
  patch多的新VNode
