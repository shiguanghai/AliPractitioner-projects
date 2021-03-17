import { EEventEmitterType } from '../../utils';

Page({
  data: {
    todo: [
      { text: 'Learn JavaScript', checked: true, },
      { text: 'Learn Alipay MiniProgram', checked: false },
      { text: 'Learn TypeScript', checked: false },
    ],
  },
  onLoad() {
    getApp()
        .eventEmitter
        .addEventListener(EEventEmitterType.ADD_TODO_ITEM, this.handleAddItem.bind(this));
  },
  handleAddItem(item) {
    this.$spliceData({
      todo: [this.data.todo.length, 0, item],
    });
  },
  handleItemLongTap(todoIndex) {
    const item = this.data.todo[todoIndex];
    if (item) {
      my.showActionSheet({
        items: [item.checked ? 'Mark as TODO' : 'Mark as Done', 'Delete'],
        success: ({ index: action }) => {
          switch (action) {
            case 0:
              return this.setData({
                ['todo.' + todoIndex + '.checked']: !item.checked,
              });
            case 1:
              return this.$spliceData({
                todo: [todoIndex, 1],
              });
          }
        },
      });
    }
  },
  handleButtonTap() {
    my.navigateTo({
      url: '../add/add',
    });
  },
});
