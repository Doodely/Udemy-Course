export class LikeComponent {
    // Properties
    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }

    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    // Click function
    onClick() {
        this._likesCount += (this._isSelected) ? 1 : -1;
        this._isSelected = !this._isSelected;
    }
}