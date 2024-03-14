// Assuming you have PostService.spec.ts and Post.ts

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { PostService } from '../../services/post.service'; // Import PostService
import { Post } from '../../model/post'; // Import Post model

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postService: PostService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [ PostService ]
    })
    .compileComponents(); // Compile components asynchronously
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent); // Use TestBed.createComponent
    component = fixture.componentInstance;
    postService = TestBed.inject(PostService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});