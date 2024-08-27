import {Component} from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  items = [
    'https://pic.tu-tu.ru/content4/78436548956496.jpg', 
    'https://pic.tu-tu.ru/content4/7565894768.jpg', 
    'https://pic.tu-tu.ru/content4/shutterstock_350058290.jpg', 
    'https://cojo.ru/wp-content/uploads/2022/12/shchenok-2-2.webp', 
    'https://sobakovod.club/uploads/posts/2022-01/thumbs/1641101147_43-sobakovod-club-p-sobaki-samie-milie-shchenyata-46.jpg', 
    'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_640.jpg', 
    'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_576x640/788/h1050/008eebd8-e317-4db7-8ddd-d0feb397292f.jpeg', 
    'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_576x640/81/h1050/f9a60a4a-0be1-4d5e-928b-6b1198760b65.jpeg', 
    'https://files.lavkapitomca.ru/storage/blog/post/00/00/73/files/taksa_1.jpg', 
    'https://s0.rbk.ru/v6_top_pics/media/img/5/52/756808787591525.jpg'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

}
