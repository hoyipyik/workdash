# WorkDash
 React App combining to do lists and tomato clock together

## Things to Know 

<!-- For the App is composed with React.js, all component variables are stored in objects owned by each component called state.

So you can't find the variables of the App in the doc created automatically by the jsdoc tool. -->

因为使用了react.js来写软件, 根据react的规则, 每个component的变量都是存放在state中的， jsdoc只能检测到class中一个叫 state 的 member。所以如果想看到详细的变量信息，麻烦在state处点击对应的代码索引到代码中查看，我已经做了详细的标注。

在原生的react的规则下，下层向上层传递参数，必须调用上层的函数，所以较高的层级的component会不可避免地出现行数较多的现象。arrow function的this必须指向对应的对象，一个component的最直接的函数必须放在一起。对todo和clock我已经尽可能按照逻辑来对界面拆分了，其他的确实无法拆分。如果继续拆分会破坏功能。

react在前端的使用非常广泛， 这个问题是框架限制所致，希望老师谅解。
 
## Use
- Develop Mode
```
yarn install
```
```
yarn start
```
- Web App Demo

https://hoyipyik.github.io/workdash
