"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        // Properties
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    // Click function
    LikeComponent.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? 1 : -1;
        this._isSelected = !this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
