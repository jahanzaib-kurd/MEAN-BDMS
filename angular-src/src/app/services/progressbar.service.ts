import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ProgressbarState } from '../progressbar';
@Injectable()
export class ProgressbarService {
private progressbarSubject = new Subject<ProgressbarState>();
progressbarState = this.progressbarSubject.asObservable();
constructor() { }
show() {
        this.progressbarSubject.next(<ProgressbarState>{show: true});
    }
hide() {
        this.progressbarSubject.next(<ProgressbarState>{show: false});
    }
}