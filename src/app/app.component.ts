import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  koord1: number;
  koord2: number;
  turn: number = 1;
  coba : number;
  baris1 = [
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" }
  ];
  baris2 = [
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" }
  ];
  baris3 = [
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" }
  ];
  baris4 = [
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" }
  ];
  baris5 = [
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" },
    { isi: "*" }
  ];
  Masuk() {
    if (this.turn == 1) 
    {
      if (this.koord2 == 1) 
      {
        if (this.koord1 == 1) 
        {
          this.baris1[0].isi = "1";
        }
        if (this.koord1 == 2) 
        {
          this.baris1[1].isi = "1";
        }
        if (this.koord1 == 3) 
        {
          this.baris1[2].isi = "1";
        }
        if (this.koord1 == 4) 
        {
          this.baris1[3].isi = "1";
        }
        if (this.koord1 == 5) 
        {
          this.baris1[4].isi = "1";
        }
      } 
      else if (this.koord2 == 2) 
      {
        if (this.koord1 == 1) 
        {
          this.baris2[0].isi = "1";
        }
        if (this.koord1 == 2) 
        {
          this.baris2[1].isi = "1";
        }
        if (this.koord1 == 3) 
        {
          this.baris2[2].isi = "1";
        }
        if (this.koord1 == 4) 
        {
          this.baris2[3].isi = "1";
        }
        if (this.koord1 == 5) 
        {
          this.baris2[4].isi = "1";
        }
      } 
      else if (this.koord2 == 3) 
      {
        if (this.koord1 == 1) 
        {
          this.baris3[0].isi = "1";
        }
        if (this.koord1 == 2) 
        {
          this.baris3[1].isi = "1";
        }
        if (this.koord1 == 3) 
        {
          this.baris3[2].isi = "1";
        }
        if (this.koord1 == 4) 
        {
          this.baris3[3].isi = "1";
        }
        if (this.koord1 == 5) 
        {
          this.baris3[4].isi = "1";
        }
      } 
      else if (this.koord2 == 4) 
      {
        if (this.koord1 == 1) 
        {
          this.baris4[0].isi = "1";
        }
        if (this.koord1 == 2) 
        {
          this.baris4[1].isi = "1";
        }
        if (this.koord1 == 3) 
        {
          this.baris4[2].isi = "1";
        }
        if (this.koord1 == 4) 
        {
          this.baris4[3].isi = "1";
        }
        if (this.koord1 == 5) 
        {
          this.baris4[4].isi = "1";
        }
      } 
      else if (this.koord2 == 5) 
      {
        if (this.koord1 == 1) 
        {
          this.baris5[0].isi = "1";
        }
        if (this.koord1 == 2) 
        {
          this.baris5[1].isi = "1";
        }
        if (this.koord1 == 3) 
        {
          this.baris5[2].isi = "1";
        }
        if (this.koord1 == 4) 
        {
          this.baris5[3].isi = "1";
        }
        if (this.koord1 == 5) 
        {
          this.baris5[4].isi = "1";
        }
      }
    }
    else
    {
      if (this.koord2 == 1) 
      {
        if (this.koord1 == 1) 
        {
          this.baris1[0].isi = "2";
        }
        if (this.koord1 == 2) 
        {
          this.baris1[1].isi = "2";
        }
        if (this.koord1 == 3) 
        {
          this.baris1[2].isi = "2";
        }
        if (this.koord1 == 4) 
        {
          this.baris1[3].isi = "2";
        }
        if (this.koord1 == 5) 
        {
          this.baris1[4].isi = "2";
        }
      } 
      else if (this.koord2 == 2) 
      {
        if (this.koord1 == 1) 
        {
          this.baris2[0].isi = "2";
        }
        if (this.koord1 == 2) 
        {
          this.baris2[1].isi = "2";
        }
        if (this.koord1 == 3) 
        {
          this.baris2[2].isi = "2";
        }
        if (this.koord1 == 4) 
        {
          this.baris2[3].isi = "2";
        }
        if (this.koord1 == 5) 
        {
          this.baris2[4].isi = "2";
        }
      } 
      else if (this.koord2 == 3) 
      {
        if (this.koord1 == 1) 
        {
          this.baris3[0].isi = "2";
        }
        if (this.koord1 == 2) 
        {
          this.baris3[1].isi = "2";
        }
        if (this.koord1 == 3) 
        {
          this.baris3[2].isi = "2";
        }
        if (this.koord1 == 4) 
        {
          this.baris3[3].isi = "2";
        }
        if (this.koord1 == 5) 
        {
          this.baris3[4].isi = "2";
        }
      } 
      else if (this.koord2 == 4) 
      {
        if (this.koord1 == 1) 
        {
          this.baris4[0].isi = "2";
        }
        if (this.koord1 == 2) 
        {
          this.baris4[1].isi = "2";
        }
        if (this.koord1 == 3) 
        {
          this.baris4[2].isi = "2";
        }
        if (this.koord1 == 4) 
        {
          this.baris4[3].isi = "2";
        }
        if (this.koord1 == 5) 
        {
          this.baris4[4].isi = "2";
        }
      } 
      else if (this.koord2 == 5) 
      {
        if (this.koord1 == 1) 
        {
          this.baris5[0].isi = "2";
        }
        if (this.koord1 == 2) 
        {
          this.baris5[1].isi = "2";
        }
        if (this.koord1 == 3) 
        {
          this.baris5[2].isi = "2";
        }
        if (this.koord1 == 4) 
        {
          this.baris5[3].isi = "2";
        }
        if (this.koord1 == 5) 
        {
          this.baris5[4].isi = "2";
        }
      }
    }
  }
}
