import { EEventEmitterType } from '../../utils';

Page({
  handleButtonTap() {
    if (this.inputValue) {
      getApp()
        .eventEmitter
        .dispatchEvent(EEventEmitterType.ADD_TODO_ITEM, { text: this.inputValue });
      
      my.showToast({
        content: 'Success!',
        type: 'success',
        success() {
          my.navigateBack();
        },
      });
    } else {
      my.showToast({
        content: 'Input item text to add',
        type: 'fail',
      });
    }
  },
  handleCancel() {
    my.navigateBack();
  },
  handleInputInput(e) {
    this.inputValue = e.detail.value;
  },
});
