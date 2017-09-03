// post/post-repository.service.ts
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class PostRepository {

    constructor(private authHttp: AuthHttp) {}

    getList() {
        const url = 'https://tp-angular.sf/api/posts';

        return this.authHttp
            .get(url)
            .map((data: Response) => data.json());
    }
}
