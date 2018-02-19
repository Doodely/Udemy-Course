export class LikeComponent {
    constructor(public likesCount: number, public isSelected: boolean) {
    }

    // Click function
    onClick() {
        this.likesCount += (this.isSelected) ? 1 : -1;
        this.isSelected = !this.isSelected;
    }
}