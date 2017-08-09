<template>
  <div class="msgbox-wrapper" :class="{'hide': hidePop}">
    <div class="v-modal"></div>
    <transition name="msgbox-bounce">
      <div class="msgbox">
        <div class="msgbox-header" v-if="title !== ''">
          <div class="msgbox-title">{{ title }}</div>
        </div>
        <div class="msgbox-content" v-if="content !== ''">
          <div class="msgbox-message" v-html="content"></div>
        </div>
        <div class="msgbox-btns">
          <button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  let CONFIRM_TEXT = '确定'
  let CANCEL_TEXT = '取消'
  export default {
    data () {
      return {
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        cancelButtonClass: '',
        showConfirmButton: true,
        hidePop: false
      }
    },
    props: {
      type: {
        type: String,
        required: true,
        default: 'alert' // 可选参数：alert, prompt
      },
      title: {
        type: String,
        required: true,
        default: '我是弹窗标题'
      },
      content: {
        type: String,
        required: true,
        default: '我是弹窗内容'
      }
    },
    computed: {
      confirmButtonClasses () {
        return 'msgbox-btn msgbox-confirm ' + this.confirmButtonClass
      },
      cancelButtonClasses () {
        return 'msgbox-btn msgbox-cancel ' + this.cancelButtonClass
      },
      showCancelButton () {
        if (this.type === 'prompt') {
          return true
        }
      }
    },
    methods: {
      /* 还差事件代理 */
      handleAction (action) {
        if (this.type === 'alert') {
          this.hidePop = true
          return
        }

        if (action === 'cancel') {
          this.hidePop = true
          return
        }

        if (action === 'confirm') {
          this.hidePop = true
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .msgbox-wrapper {
    &.hide {
      display: none;
    }
  }
  .msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    width: 85%;
    border-radius: 3px;
    font-size: 32px;
    -webkit-user-select: none;
    overflow: hidden;
    backface-visibility: hidden;
    transition: .2s;
    .msgbox-header {
      padding: 30px 0 0;
    }
    .msgbox-content {
      padding: 30px 40px;
      border-bottom: 1px solid #ddd;
      min-height: 36px;
      position: relative;
    }
    .msgbox-input {
      padding-top: 15px;
      input {
        border: 1px solid #dedede;
        border-radius: 5px;
        padding: 4px 5px;
        width: 100%;
        appearance: none;
        outline: none;
      }
      input.invalid {
        border-color: #ff4949;
        &:focus {
          border-color: #ff4949;
        }
      }
    }
    .msgbox-errormsg {
      color: red;
      font-size: 12px;
      min-height: 18px;
      margin-top: 2px;
    }
    .msgbox-title {
      text-align: center;
      padding-left: 0;
      margin-bottom: 0;
      font-size: 32px;
      font-weight: bold;
      color: #333;
    }
    .msgbox-message {
      color: #999;
      margin: 0;
      text-align: center;
      line-height: 36px;
    }
    .msgbox-btns {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 80px;
      line-height: 80px;
    }
    .msgbox-btn {
      line-height: 35px;
      display: block;
      background-color: #fff;
      flex: 1;
      margin: 0;
      border: 0;
      &:focus {
        outline: none;
      }
      &:active {
        background-color: #fff;
      }
    }
    .msgbox-cancel {
      width: 50%;
      border-right: 1px solid #ddd;
      &:active {
        color: #000;
      }
    }
    .msgbox-confirm {
      color: #26a2ff;
      width: 50%;
      &:active {
        color: #26a2ff;
      }
    }
    .msgbox-bounce-enter {
      opacity: 0;
      transform: translate3d(-50%, -50%, 0) scale(0.7);
    }
    .msgbox-bounce-leave-active {
      opacity: 0;
      transform: translate3d(-50%, -50%, 0) scale(0.9);
    }
  }
  .v-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
  }
</style>
