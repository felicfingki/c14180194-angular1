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
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;
  count5: number = 0;
  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  counter4: number = 0;
  counter5: number = 0;
  win: string;
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
    if (this.turn == 3) {
      this.turn = 1;
    }
    if (this.turn == 1) {
      if (this.koord2 == 1) {
        if (this.koord1 == 1) {
          this.baris1[0].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[0].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[0].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[0].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[0].isi = "1";
          this.turn = this.turn + 1;
        }
      } else if (this.koord2 == 2) {
        if (this.koord1 == 1) {
          this.baris1[1].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[1].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[1].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[1].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[1].isi = "1";
          this.turn = this.turn + 1;
        }
      } else if (this.koord2 == 3) {
        if (this.koord1 == 1) {
          this.baris1[2].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[2].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[2].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[2].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[2].isi = "1";
          this.turn = this.turn + 1;
        }
      } else if (this.koord2 == 4) {
        if (this.koord1 == 1) {
          this.baris1[3].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[3].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[3].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[3].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[3].isi = "1";
          this.turn = this.turn + 1;
        }
      } else if (this.koord2 == 5) {
        if (this.koord1 == 1) {
          this.baris1[4].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[4].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[4].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[4].isi = "1";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[4].isi = "1";
          this.turn = this.turn + 1;
        }
      }
    } else {
      if (this.koord2 == 1) {
        if (this.koord1 == 1) {
          this.baris1[0].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[0].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[0].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[0].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[0].isi = "2";
          this.turn = this.turn + 1;
        }
      } else if (this.koord2 == 2) {
        if (this.koord1 == 1) {
          this.baris1[1].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[1].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[1].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[1].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[1].isi = "2";
          this.turn = this.turn + 1;
        }
      } else if (this.koord2 == 3) {
        if (this.koord1 == 1) {
          this.baris1[2].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[2].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[2].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[2].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[2].isi = "2";
          this.turn = this.turn + 1;
        }
      } else if (this.koord2 == 4) {
        if (this.koord1 == 1) {
          this.baris1[3].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[3].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[3].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[3].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[3].isi = "2";
          this.turn = this.turn + 1;
        }
      } else if (this.koord2 == 5) {
        if (this.koord1 == 1) {
          this.baris1[4].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 2) {
          this.baris2[4].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 3) {
          this.baris3[4].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 4) {
          this.baris4[4].isi = "2";
          this.turn = this.turn + 1;
        }
        if (this.koord1 == 5) {
          this.baris5[4].isi = "2";
          this.turn = this.turn + 1;
        }
      }
    }
    for (let i = 0; i < 5; i++) {
      if (this.baris1[i].isi === "1") {
        this.count1 = this.count1 + 1;
      } else if (this.baris1[i].isi === "2") {
        this.counter1 = this.counter1 + 1;
      }
    }
    for (let i = 0; i < 5; i++) {
      if (this.baris2[i].isi === "1") {
        this.count2 = this.count2 + 1;
      } else if (this.baris2[i].isi === "2") {
        this.counter2 = this.counter2 + 1;
      }
    }
    for (let i = 0; i < 5; i++) {
      if (this.baris3[i].isi === "1") {
        this.count3 = this.count3 + 1;
      } else if (this.baris3[i].isi === "2") {
        this.counter3 = this.counter3 + 1;
      }
    }
    for (let i = 0; i < 5; i++) {
      if (this.baris4[i].isi === "1") {
        this.count4 = this.count4 + 1;
      } else if (this.baris4[i].isi === "2") {
        this.counter4 = this.counter4 + 1;
      }
    }
    for (let i = 0; i < 5; i++) {
      if (this.baris5[i].isi === "1") {
        this.count5 = this.count5 + 1;
      } else if (this.baris5[i].isi === "2") {
        this.counter5 = this.counter5 + 1;
      }
    }
    if (
      this.count1 >= 4 ||
      this.count2 >= 4 ||
      this.count3 >= 4 ||
      this.count4 >= 4 ||
      this.count5 >= 4
    ) {
      this.win = "Player1 Win";
    } else if (
      this.counter1 >= 4 ||
      this.counter2 >= 4 ||
      this.counter3 >= 4 ||
      this.counter4 >= 4 ||
      this.counter5 >= 4
    ) {
      this.win = "Player2 Win";
    }
  }
}
