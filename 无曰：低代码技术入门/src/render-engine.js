import React from "react";

export default class RenderEngine {
  schema = null;

  constructor(schema, components) {
    this.schema = schema;
    this.components = components;
  }

  //标签名称解析
  componentName(name) {
    const componentNameList = Object.entries(this.components).map((i) => i[0]);

    //在提供的标签中
    if (componentNameList.some((item) => name.startsWith(item))) {
      //判断是不是某类的子标签
      if (name.includes("."))
        return this.components[name.split(".")[0]][name.split(".")[1]];

      return this.components[name];
    }

    return name;
  }

  //节点渲染
  render(children) {
    if (!children) return;

    return children.map((child) => {
      if (typeof child != "object") return child;

      return React.createElement(
        this.componentName(child.componentName), //标签名称
        child.props, //属性
        this.render(child.children) //子节点(可以是文本节点)
      );
    });
  }

  createApp() {
    const schema = this.schema;
    return () => this.render([schema]);
  }
}
