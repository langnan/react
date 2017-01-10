;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-first" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M657.212778 692.010817c198.527542-34.618449 302.065663-272.621051 302.065663-485.913878-63.067384 0-134.414339 0-162.91751 0 9.620102-68.769246 15.646352-124.139322 15.646352-143.373385-91.650373 0-506.526335 0-598.173638 0 3.317559 36.776601 7.833409 87.304392 14.016225 143.373385-28.79686 0-99.963713 0-163.856905 0 0 216.192877 104.930841 453.824019 307.677475 486.460324 32.152281 41.288358 56.08025 58.536184 83.363639 67.988464 0 19.120476 0 47.786353 0 47.786353L339.263355 808.332079l-86.837764 152.959717 520.990768 0L686.578596 808.333102 570.804802 808.333102l0-47.786353C595.832825 754.150062 628.084367 727.289298 657.212778 692.010817zM715.530998 598.039585c24.75173-57.706283 52.937676-207.106941 72.409147-334.572008 12.798491 0 32.917714 0 60.302411 0 0 179.800016-78.458933 313.974901-135.833665 341.376994C713.450616 602.567715 714.549647 600.293929 715.530998 598.039585zM175.243745 263.4686c26.479071 0 46.303582 0 59.31799 0 15.940041 128.166031 40.496319 269.923616 78.456886 341.55198C254.878456 578.178235 175.243745 443.267593 175.243745 263.4686zM399.837966 563.42216 399.837966 503.305991l75.555813 0L475.393779 271.492344l-77.660754 17.544585 0-61.98882 153.216567-32.280194L550.949592 503.305991l75.088162 0 0 60.117193L399.837966 563.423183z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye-shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M936.741 462.414c-0.412-14.642-3.32-25.443-13.707-40.294-1.974-3.01-319.02-341.837-319.02-341.837-22.017-23.469-51.064-34.711-80.242-34.738v-0.233c-0.419-0.026-0.939 0.131-1.458 0.131s-1.037-0.157-1.557-0.131v0.233c-29.076 0.026-58.151 11.269-80.272 34.738 0 0-316.94 338.826-318.913 341.837-10.384 14.851-13.291 25.652-13.708 40.294v5.504c0 46.21 37.489 83.756 83.701 83.756h20.042v300.375c0 48.912 43.925 88.529 98.033 88.529 54.105 0 97.927-39.616 97.927-88.53V551.674h229.368v300.375c0 48.912 43.93 88.529 98.035 88.529s97.924-39.616 97.924-88.53V551.674h20.046c46.314 0 83.802-37.544 83.802-83.756 0-0.416-0.102-0.83-0.102-1.245l0.101-4.258zM811.918 159.62l0.521 0.65 63.036 66.618c8.93 9.398 23.68 9.814 33.023 0.934 0.103-0.051 0.103-0.156 0.314-0.26l0.828-0.778c2.803-2.906 4.467-5.502 5.506-10.489 0.207-0.934 0.31-1.974 0.412-2.96 0.207-1.09 0.414-2.128 0.52-3.427l7.272-123.63c0.519-9.01-2.805-17.03-8.306-22.95v-0.052c-0.107-0.078-0.212-0.181-0.316-0.259a4.277 4.277 0 0 1-0.312-0.338v0.025c-5.606-5.865-13.397-9.606-22.43-9.578l-123.889 0.311a60.334 60.334 0 0 0-3.427 0.234c-1.042 0.077-1.977 0.105-2.908 0.285-5.089 0.752-7.788 2.233-10.905 4.959l-0.832 0.832c0 0.05-0.208 0.129-0.208 0.18-9.34 8.907-9.762 23.653-0.936 33.05l63.037 66.643z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)