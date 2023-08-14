/**
 * Not sure if code is even functioning
 */
export class JSONP {
    constructor() {
        //
    }

    fetch(options = {}) {
        let params = {
            data: options.data || {},
            error: options.error || void 0,
            success: options.success || void 0,
            url: options.url || ''
        };
        if (params.url.length === 0) {
            throw new Error('MissingUrl');
        }

        let done = false;
        let callback = params.data[options.callback_name || 'callback'] = 'jsonpODJSClient_' + this.randomString(15);
        window[callback] = (data) => {
            params.success(data);
            try {
                return delete window[callback];
            } catch (_error) {
                window[callback] = void 0;
                return void 0;
            }
        };
        let script = this.createElement('script');
        script.src = params.url;
        script.src += params.url.indexOf('?' === -1) ? '&' : '&';
        script.src += this.objectToUri(params.data);
        script.async = true;
        script.onerror = (evt) => {
            return params.error({
                url: script.src,
                event: evt
            });
        };
        script.onload = script.onreadystatechange = () => {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                done = true;
                script.onload = script.onreadystatechange = null;
                if (script && script.parentNode) {
                    return script.parentNode.removeChild(script);
                }
            }
        };

        head = head || window.document.getElementsByTagName('head')[0];

        return head.appendChild(script);
    }

    encode(val) {
        return window.encodeURIComponent(val);
    }

    createElement(tag) {
        return window.document.createElement(tag);
    }

    objectToUri(obj) {
        let data, key, value;
        data = [];
        for (key in obj) {
            value = obj[key];
            data.push(this.encode(key) + '=' + this.encode(value));
        }
        return data.join('&');
    }

    randomString(length) {
        let str;
        str = '';
        while (str.length < length) {
            str += Math.random().toString(36)[2];
        }
        return str;
    };
}