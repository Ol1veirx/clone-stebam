import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { TorneioService } from '../services/torneio.service';
import { Router } from 'express';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-torneio-detalhe',
  standalone: true,
  imports: [MaterialModule, CommonModule, MatFormField, MatLabel, MatOption, MatSelect],
  templateUrl: './torneio-detalhe.component.html',
  styleUrl: './torneio-detalhe.component.css'
})
export class TorneioDetalheComponent {
    torneios: any[] = [];
    equipes: any[] = [];
    nomeTorneio: string = '';

    displayedColumns: string[] = ['name', 'pontos', 'setor', 'peso', 'qnt', 'maior'];
    dataSource = new MatTableDataSource<any>(this.equipes);

    @ViewChild(MatSort) sort!: MatSort;

    constructor(private torneioService: TorneioService, private route: ActivatedRoute ) { }

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }

    ngOnInit(): void {
      this.torneios = this.torneioService.getTorneio();
      this.equipes = this.torneioService.getTeams();
      this.dataSource.data = this.equipes;
    }

    voltar(): void {
      window.history.back();
    }

    baixarRegulamento(): void {
      
    }

}
