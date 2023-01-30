import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-competences';
  active = 1
  startColor ="#0089FF"
  endColor ="#232532"
  menus: MenuItem[] = [
    {
      label: "АИ-92",
    },
    {
      label: "КЕРОСИН",
    },
    {
      label: "ДТ ЗИМНЕЕ",
    },
    {
      label: "ТС-1",
    },
    {
      label: "АИ-95",
    },
    {
      label: "МАЗУТ",
    },
    {
      label: "ГАЗОЙЛЬ",      
    },
    {
      label: "НЕФТЬ",      
    }
  ]
  reservoirs = [
    {
      name: "Macca",
      numb: "980",
      percent: 98,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №1",
      color: "#EB5757"
    },
    {
      name: "Macca",
      numb: "680",
      percent: 68,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №2",
      color: "#00A99D"
    },
    {
      name: "Macca",
      numb: "180",
      percent: 18,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №3",
      color: "#EB5757"
    },
    {
      name: "Macca",
      numb: "750",
      percent: 75,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №4",
      color: "#00A99D"
    },
    {
      name: "Macca",
      numb: "180",
      percent: 18,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №3",
      color: "#EB5757"
    },
    {
      name: "Macca",
      numb: "750",
      percent: 75,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №4",
      color: "#00A99D"
    },
    {
      name: "Macca",
      numb: "750",
      percent: 75,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №4",
      color: "#00A99D"
    },
    {
      name: "Macca",
      numb: "980",
      percent: 98,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №1",
      color: "#EB5757"
    },
    {
      name: "Macca",
      numb: "680",
      percent: 68,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №2",
      color: "#00A99D"
    },
    {
      name: "Macca",
      numb: "180",
      percent: 18,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №3",
      color: "#EB5757"
    },
    {
      name: "Macca",
      numb: "750",
      percent: 75,
      sentence: "Уровень",
      sentence1: "керосина",
      sentence2: "в резервуаре №4",
      color: "#00A99D"
    },
  ]
  gradient(startColor: string, endColor: string, startPercent: number, endPercent: number) {
    return `linear-gradient(to top, ${startColor} ${startPercent}%, ${endColor} ${endPercent}%)`;
  }
}
