import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gate-calculations',
  templateUrl: './gate-calculations.page.html',
  styleUrls: ['./gate-calculations.page.scss'],
})
export class GateCalculationsPage implements OnInit {
  toggleDrawings = true;
  stairSegment = 'calc';

  btnClearStorage = false;

  toggleBars = true;

  _gateWidth = null;
  _postDiam = null;
  _gapB = null;
  _D = null;
  _barDiam = null;
  _barsNum = null;

  _gap = 0;
  _widthB = 0;
  _barLength = 0;

  _startPointsA: number[];
  _startPointsB: number[];

  slideOpts = {
		effect: 'flip'
	};

  constructor() { }

  ngOnInit() {
    this._gateWidth = Number(localStorage.getItem('_gateWidth'));
    this._postDiam = Number(localStorage.getItem('_postDiam'));
    this._gapB = Number(localStorage.getItem('_gapB'));
    this._D = Number(localStorage.getItem('_D'));
    this._barDiam = Number(localStorage.getItem('_barDiam'));
    this._barsNum = Number(localStorage.getItem('_barsNum'));

    this.onCalculateData();
  }

  onToggleDrawings() {
    this.toggleDrawings = !this.toggleDrawings;
  }

  onCalculateData() {
    this._startPointsA = [];
    this._startPointsB = [];
    
    const barLength = (this._gateWidth - 2 * this._postDiam - this._gapB - 2 * this._D) / 2;
    const widthB = +barLength + this._postDiam + this._D;
    const gap = (+barLength - this._barDiam * this._barsNum) / (this._barsNum + 1);

    //With dog bars
    const startPointsA: number[] = [];
    let startA = gap / 2;
    const centerA = (+gap + this._barDiam) / 2;
    const centersNum = this._barsNum  * 2;
    startPointsA.push(+startA.toFixed(0));

    for (let i = 0; i < centersNum; i++) {
      startA = startA + centerA;
      startPointsA.push(+startA.toFixed(0));
    }

    //With NO dog bars
    const startPointsB: number[] = [];
    let startB = gap + this._barDiam / 2;
    const centerB = +gap + this._barDiam;
    startPointsB.push(+startB.toFixed(0));

    for (let i = 1; i < this._barsNum; i++) {
      startB = startB + centerB;
      startPointsB.push(+startB.toFixed(0));
    }


    if (gap && gap < this._gateWidth) {
      this._widthB = +widthB.toFixed(0);
      this._barLength = +barLength.toFixed(0);
      this._gap = +gap.toFixed(1);
      this._startPointsA = [ ...startPointsA ];
      this._startPointsB = [ ...startPointsB];

      localStorage.setItem('_gateWidth', this._gateWidth);
      localStorage.setItem('_postDiam', this._postDiam);
      localStorage.setItem('_gapB', this._gapB);
      localStorage.setItem('_D', this._D);
      localStorage.setItem('_barDiam', this._barDiam);
      localStorage.setItem('_barsNum', this._barsNum);

      this.btnClearStorage = true;
    }

  }

  onResetForm() {
    this._gateWidth = null;
    this._postDiam = null;
    this._gapB = null;
    this._D = null;
    this._barDiam = null;
    this._barsNum = null;
    this._gap = 0;
    this._widthB = 0;
    this._barLength = 0;

    this._startPointsA = [];
    this._startPointsB = [];

    this.btnClearStorage = false;
  }

}
