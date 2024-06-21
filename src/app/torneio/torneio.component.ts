import { Component, OnInit } from '@angular/core';
import { TorneioService } from '../services/torneio.service';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneio',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './torneio.component.html',
  styleUrl: './torneio.component.css'
})
export class TorneioComponent implements OnInit {

  torneios: any[] = [];

  constructor(private torneioService: TorneioService, private router: Router) { }

  ngOnInit(): void {
    this.torneios = this.torneioService.getTorneio();
  }

  verDetalhes(): void {
    this.router.navigate(['/torneio-detalhe']);
  }
}
