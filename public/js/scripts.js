(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _menu = require("./modules/menu");

},{"./modules/menu":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var menu = exports.menu = function menu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
      if (navId === 'main-menu') document.body.classList.toggle('main-menu-visible');
    });
  }
};

menu('main-menu-toggle', 'main-menu');
menu('vertical-menu-toggle', 'vertical-menu');

var activeMenuItem = function activeMenuItem(containerId) {
  var links = [].concat(_toConsumableArray(document.querySelectorAll('#' + containerId + ' a')));
  var curentUrl = document.location.href;
  links.map(function (link) {
    if (link.href === curentUrl) {
      link.classList.add('active');
    }
  });
};

activeMenuItem('vertical-menu');

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
