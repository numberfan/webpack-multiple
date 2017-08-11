<template lang="html">
    <div class="vue-ui-tooltips" :class="[className, {'is-show': isShow}]">
        <span v-html="message" class="text"></span>
    </div>
</template>

<script>
  export default {
    name: 'tooltips',
    data () {
      return {
        timeout: null,
        isShow: false,
        message: '张三与李四',
        position: 'success',
        duration: 1000,
        callback () {
        }
      }
    },
    computed: {
      className () {
        let type = ''
        switch (this.position) {
          case 'top':
            type = 'placetop'
            break
          case 'bottom':
            type = 'placebottom'
            break
          default:
            type = 'placemiddle'
        }
        return type
      }
    },
    mounted () {
      this.show().bind()
    },
    methods: {
      bind () {
        let _this = this
        clearTimeout(this.timeout)
        this.timeout = setTimeout(function () {
          _this.hide()
        }, this.duration)
        return this
      },
      hide () {
        let _this = this
        let remove = function () {
          _this.$el.parentNode.removeChild(_this.$el)
          _this.callback && _this.callback.apply(_this)
        }
        this.isShow = false
        this.$el.addEventListener('transitionend', remove, {once: true})
        return this
      },
      show () {
        let _this = this
        setTimeout(function () {
          _this.isShow = true
        }, 100)
        return this
      }
    }
  }
</script>

<style lang="less">
.vue-ui-tooltips {
    padding: 0;
    position: fixed;
    left: 50%;
    top: 0;
    max-width: 80%;
    z-index: 100;
    text-align: center;
    color: #404040;
    opacity: 0;
    transition: opacity .3s linear;

    .text {
        margin: 0;
        padding: 8px 20px;
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.7);
        font-size: 24px;
        box-sizing: border-box;
        border: 1px solid #d9d9d9;
        color: #fff;
        border-top: 0;
       border-radius: 5px;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
    }
    &.placetop {
      top: 50px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &.placemiddle {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.placebottom {
      bottom: 50px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &.is-show {
      opacity: 1;
    }
}
@media screen and (max-width: 640px) {
    .vue-ui-tooltips {
        max-width: none;
        width: 100%;
        left: 0;
        margin-left: 0;
    }
}
</style>
