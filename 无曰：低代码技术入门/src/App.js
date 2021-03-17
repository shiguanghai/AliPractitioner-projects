/* 第一小题示例代码 */
// import React, { Component } from "react";
// import "./App.css";
// import { Form, Input, Button, Checkbox } from "antd";

// class App extends Component {
//   // 请根据 schema.js 描述的页面，实现 render 方法，渲染出指定的页面
//   render() {
//     return (
//       <Form
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 8 }}
//         name="basic"
//         initialValues={{ remember: true }}
//       >
//         <Form.Item
//           label="用户名"
//           name="username"
//           eules={[{ require: true, message: "请输入你的用户名" }]}
//           required
//         >
//           <Input size="middle" />
//         </Form.Item>
//         <Form.Item
//           label="密码"
//           name="password"
//           eules={[{ require: true, message: "请输入你的密码!" }]}
//           required
//         >
//           <Input.Password size="middle" />
//         </Form.Item>
//         <Form.Item
//           wrapperCol={{ span: 8, offset: 8 }}
//           name="remember"
//           valuePropName="checked"
//         >
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>
//         <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
//           <Button type="primary">提交</Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// export default App;

/* 第二小题示例代码 */
// import { Button } from 'antd';
import { Form, Input, Button, Checkbox } from "antd";
import schema from "./schema";
import RenderEngine from "./render-engine.js";
import "./App.css";

const components = { Form, Input, Button, Checkbox };
// 渲染引擎的输入为页面描述 schema 和组件依赖的映射 components
const re = new RenderEngine(schema, components);
const App = re.createApp();

export default App;
