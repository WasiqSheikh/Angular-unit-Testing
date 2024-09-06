import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { CommentsService } from "./comments.service";
import { API_URL } from "../utils/resources";
import allComments  from "../../../db.json";
import { firstValueFrom } from "rxjs";

let comments = [
  {
    "id": "1",
    "text": "a comment about post 1"
  },
  {
    "id": "2",
    "text": "another comment about post 1"
  },
  {
    "id": 1715333244678,
    "text": "third comment"
  },
  {
    "id": 1719300175605,
    "text": "fourth comment"
  }
]


describe('CommentsService', () => {
  let commentService: CommentsService;
  let httpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommentsService,
        provideHttpClientTesting(),
        provideHttpClient(withInterceptorsFromDi()),
      ],
    });
    commentService = TestBed.inject(CommentsService);
    httpTesting = TestBed.inject(HttpTestingController);
  })

  it('should be created', () => {
    expect(commentService).toBeTruthy();
  })

  it('should get all comments', () => {

    commentService.getAllComments().subscribe((comments: any) => {
      console.log(comments);
    });

    const mockRequest = httpTesting.expectOne('http://localhost:3000/comments');
    mockRequest.flush(comments);
    // const Comment$ = commentService.getAllComments();
    // let commentPromise = firstValueFrom(Comment$);
    // console.log('cP = ',commentPromise);
    // const dummyData = allComments.comments;
    // // commentService.getAllComments().subscribe((comments: any) => {
    // //   expect(comments).toBeTruthy();
    // //   //expect(comments.length).withContext('should have 2 items').toBe(2);
    // // })
    // const req = httpTesting.expectOne('http://localhost:3000/comments');
    // expect(req.request.method).toEqual('GET');
    // req.flush(comments);

    // expect(await commentPromise).toEqual(dummyData);
  })


  afterEach(() => {
    httpTesting.verify()
  })
})