// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private service: CrisisService
    public dialogService: DialogService
  ) {}

  // ngOnInit() {
  //   this.crisis$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => this.service.getCrisis(params.get('id')))
  //   );
  // }

  ngOnInit() {
    this.route.data
      .subscribe((data: { crisis: Crisis }) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });
  }




  cancel() {
    this.gotoCrises();
  }
  
  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    // this.router.navigate(['/routing/crises', { id: crisisId, foo: 'foo' }]);
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route,
    });
  }
}
