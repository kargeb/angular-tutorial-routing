import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
// import { MessageService } from '../../message.service';
import { MessageService } from '../../../message.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss'],
})
export class CrisisListComponent implements OnInit {
  // selectedHero: Hero;

  // heroes: Hero[];

  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private heroService: CrisisService,
    private service: CrisisService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
    // this.getHeroes();
  }

  // onSelect(crisis: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`CrisisListComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  // }
}
