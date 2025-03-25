/*! 2.27.5 | BH: 82084e3aac5616ae8770 | CH: 88800c9b6c */
/*! License information is available at licenses.txt */
"use strict";
(self.webpackChunkrs_iphone = self.webpackChunkrs_iphone || []).push([
    [5607], {
        5607: e => {
            function t() {
                this._createElements(), this._bindEvents()
            }
            var i = t.prototype;
            i._bindEvents = function() {
                this._onResize = this._resize.bind(this)
            }, i._createElements = function() {
                if ("undefined" != typeof document && !this.span) {
                    this.span = document.createElement("span");
                    var e = this.span.style;
                    if (e.visibility = "hidden", e.position = "absolute", e.top = "0", e.zIndex = "-1", this.span.innerHTML = "&nbsp;", !window.ResizeObserver) {
                        this.iframe = document.createElement("iframe");
                        var t = this.iframe.style;
                        t.position = "absolute", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", this.span.appendChild(this.iframe)
                    }
                    document.body.appendChild(this.span)
                }
            }, i.detect = function(e) {
                this._createElements(), this.originalSize = e || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (window.ResizeObserver ? (this.resizeObserver = new ResizeObserver(this._onResize), this.resizeObserver.observe(this.span)) : this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
            }, i._resize = function() {
                this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize")), window.dispatchEvent(new CustomEvent("resize:text-zoom", {
                    detail: this
                }))
            }, i.getScale = function() {
                return this.currentSize / this.originalSize
            }, i.remove = function() {
                this.isDetecting && (this.resizeObserver && this.resizeObserver.unobserve(this.span), this.iframe && this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
            }, i.destroy = function() {
                this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null, this.resizeObserver = null
            }, e.exports = new t
        }
    }
]);