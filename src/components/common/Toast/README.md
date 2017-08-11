### Use
```javascript
// *.vue file
import Tooltips from 'toast.js';

Vue.use(Tooltips);

export default {
    data() {
        return {}
    },
    mounted() {
        this.$tooltips('vue-Tooltips !!!');
    }
}
```

### Example
```javascript
this.$tooltips('Tooltips !!!');

// set duration
this.$tooltips('Tooltips !!!', 5000);

// set Options
this.$tooltips('Tooltips !!!', {
    type: 'danger',
    duration: 3000,
    callback: function() {
        alert(1);
    }
});

/* type = 'success' */
this.$tooltips.success(msg, [, options]);

/* type = 'warning' */
this.$tooltips.warning(msg, [, options]);

/* type = 'danger' */
this.$tooltips.error(msg, [, options]);
```

### Options
Attribute  | Default | Type | Description
------- | ------ | ---- | --------
position |  `default` | {String} | message type `default`, `top`, `middle`, `bottom`
duration | `3000` | {Number} | display duration, millisecond. default 3000 ms.
callback | `function()` | {Function} | callback function when closed with the message instance as the parameter
