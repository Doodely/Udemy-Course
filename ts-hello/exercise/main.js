"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
// Initialize
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
// Output
console.log("likesCount: " + component.likesCount + ", isSelect: " + component.isSelected); // `` will make a component accessible formatted string
