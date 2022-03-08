import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;

  constructor(
    private activateRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
        .pipe(
          switchMap(param => this.heroeService.getHeroeById(param.id))
        )
        .subscribe(heroe => this.heroe = heroe);
  }

}
