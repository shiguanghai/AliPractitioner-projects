// 使用变量替代字符串字面量，避免跨页面使用拼写错误
// 如果使用 TypeScript 开发，则应定义 const enum EEventEmitterType
export const EEventEmitterType = {
  ADD_TODO_ITEM: 0,
};

export class EventEmitter {
  constructor() {
    this.eventMap = new Map();
  }

  addEventListener(type, callback) {
    if (typeof callback === 'function') {
      const { eventMap } = this;
      if (eventMap.has(type)) {
        eventMap.get(type).push(callback);
      } else {
        eventMap.set(type, [callback]);
      }
    }
  }

  dispatchEvent(type, args) {
    const callbacks = this.eventMap.get(type);
    if (callbacks) {
      for (const callback of callbacks.slice()) {
        callback(args);
      }
    }
  }

  removeEventListener(type, callback) {
    if (typeof callback === 'function') {
      const { eventMap } = this;
      if (eventMap.has(type)) {
        const callbacks = eventMap.get(type);
        const { length } = callbacks;
        for (let index = 0; index < length; index += 1) {
          if (callbacks[index] === callback) {
            callbacks.splice(index, 1);
            return;
          }
        }
      }
    }
  }
}
