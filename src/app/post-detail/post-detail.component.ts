import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postId: string | null = null; 
  queryParams: string | null = null; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Retrieve the route parameter 'id'
    const id = this.route.snapshot.paramMap.get('id');

    // Retrieve the query parameter 'queryParam'
    const queryParam = this.route.snapshot.queryParamMap.get('queryParam');

    // Check if id is null or undefined, then provide a default value or handle it accordingly
    if (id !== null && id !== undefined) {
      this.postId = id;
    } else {
      // Handle the case when 'id' is not found in the route
      this.postId = 'Not Found';
    }
    // Handle the 'queryParam' parameter
    if (queryParam !== null && queryParam !== undefined) {
      this.queryParams = queryParam;
    }
  }
  goBack() {
    // Navigate back to the user page
    this.router.navigate(['/']);
  }
}
