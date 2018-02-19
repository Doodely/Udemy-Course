import { LikeComponent } from './like.component';

// Initialize
let component = new LikeComponent(10, true);
component.onClick();

// Output
console.log(`likesCount: ${component.likesCount}, isSelect: ${component.isSelected}`); // `` will make a component accessible formatted string