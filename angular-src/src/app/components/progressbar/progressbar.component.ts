import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProgressbarService } from '../../services/progressbar.service';
import { ProgressbarState } from '../../core/progressbar';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})

export class ProgressbarComponent implements OnInit {
show = false;
private subscription: Subscription;
constructor(
        private progressbarService: ProgressbarService
    ) { }
ngOnInit() { 
        this.subscription = this.progressbarService.progressbarState
            .subscribe((state: ProgressbarState) => {
                this.show = state.show;
            });
    }
ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}