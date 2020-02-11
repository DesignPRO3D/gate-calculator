import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-calculations',
  templateUrl: './bar-calculations.page.html',
  styleUrls: ['./bar-calculations.page.scss'],
})
export class BarCalculationsPage implements OnInit {

  _barLength = null;
  _barDiam = null;
  _barNum = null;

  _start = 0;
  _center = 0;
  _gap = 0;

  toggleBars = true;

  _startPointsA: number[];
  _startPointsB: number[];

  constructor() { }

  ngOnInit() {
    this._barLength = Number(localStorage.getItem('_barLength2'));
    this._barDiam = Number(localStorage.getItem('_barDiam2'));
    this._barNum = Number(localStorage.getItem('_barNum2'));

    this.onCalculateData();
  }

  onCalculateData() {
    const _barLength = parseFloat(this._barLength);
    const _barDiam = parseFloat(this._barDiam);
    const _barNum = parseFloat(this._barNum);

    const _gap = (_barLength - _barNum * _barDiam) / (_barNum + 1);
    const _center = _gap + _barDiam;
    const _start = _gap + _barDiam / 2;

    //With dog bars
    const startPointsA: number[] = [];
    let startA = _gap / 2;
    const centerA = (+_gap + this._barDiam) / 2;
    const centersNum = this._barNum  * 2;
    startPointsA.push(+startA.toFixed(0));

    for (let i = 0; i < centersNum; i++) {
      startA = startA + centerA;
      startPointsA.push(+startA.toFixed(0));
    }

    //With NO dog bars
    const startPointsB: number[] = [];
    let startB = _gap + this._barDiam / 2;
    const centerB = +_gap + this._barDiam;
    startPointsB.push(+startB.toFixed(0));

    for (let i = 1; i < this._barNum; i++) {
      startB = startB + centerB;
      startPointsB.push(+startB.toFixed(0));
    }

    if (_gap > 0 && _gap < _barLength) {
      this._gap = Number(_gap.toFixed(1));
      this._center = Number(_center.toFixed(1));
      this._start = Number(_start.toFixed(1));

      this._startPointsA = [ ...startPointsA ];
      this._startPointsB = [ ...startPointsB];

      localStorage.setItem('_barLength2', this._barLength);
      localStorage.setItem('_barDiam2', this._barDiam);
      localStorage.setItem('_barNum2', this._barNum);
    }
  }

}
