import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  meunome: string = 'Jennifer Cristina Gonzalez P'
  pais: string = 'Venezuela'
  ciudade: string = 'Caracas, D.C.'
  gosto1: string = 'Alimentos Saludavel'
  gosto2: string = 'Atividades Mistas'
  url1: string = 'https://www.bodybuildinglatino.com/blog/wp-content/uploads/2013/06/frutas-verduras.jpg'
  url2: string = 'https://monstersushi.es/blog/wp-content/uploads/2016/12/sushi-take-away-barcelona-1024x682.jpg'
  url3: string = 'https://ambientesecostumes.files.wordpress.com/2016/10/dba60-10065813052016_petiscariasopas1.png'
  Comida1: string = 'Legumes e Frutas Variadas'
  Comida2: string = 'Comida Japonesa ou Sushi'
  Comida3: string = 'Variedades de Sopas e Cremes'
  alt1: string ='Legumes e Frutas Variadas'
  alt2: string ='Comida Japonesa ou Sushi'
  alt3: string ='Varieddes de Sopas e Cremes'
  alt5: string =''
  alt6: string =''
  alt7: string =''
  url5: string = 'https://comps.canstockphoto.es/clase-vario-deportes-clip-art-vectorial_csp32184360.jpg'
  url6: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4TfIHG5WTgatrE0UO-IENchR8XZmJAk84g&usqp=CAU'
  url7: string = 'https://concepto.de/wp-content/uploads/2018/09/arte-visual1-e1537976624707.jpg'
  actividade5: string = 'Esportes'
  actividade6: string = 'Dancar e Cantar'
  actividade7: string = 'Artes e Entretenimento'
  url10: string ='https://media-exp1.licdn.com/dms/image/C4E03AQEY3eLirqYP6g/profile-displayphoto-shrink_800_800/0/1606681822464?e=1620864000&v=beta&t=MS-oWwsDiIp6B6OI9aG4CVyzDO-X1_58A71c-nuvRE8'
  alt10: string = 'foto mia'
  constructor() { }

  ngOnInit(): void {
  }

}
