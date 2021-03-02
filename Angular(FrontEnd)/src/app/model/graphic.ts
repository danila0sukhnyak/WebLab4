import {Point} from './point';
import {ElementRef} from '@angular/core';

export class Graphic {

  constructor(private canvas: ElementRef) {
  }

  drawPoint(point: Point) {

    const x = point.x, y = point.y, r = point.r, hit = point.result;

    console.log('Marking point ' + x + ', ' + y + ', ' + hit);

    const context = this.canvas.nativeElement.getContext('2d');

    context.beginPath();
    context.rect(Math.round(150 + ((x / 5) * 130)) - 3, Math.round(150 - ((y / 5) * 130)) - 3, 6, 6);
    context.closePath();
    context.strokeStyle = 'black';

    let color = 'red';

    if (hit) {
      color = 'lime';
    }

    context.fillStyle = color;
    context.fill();
    context.stroke();

  }

  drawGraphic(r) {
    console.log('Drawing graphic with R=' + r);
    const context = this.canvas.nativeElement.getContext('2d');
    context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    if (r >= 0) {
      // rectangle
      context.beginPath();
      context.rect(150, 150, 130 * (r / 5), (r) * 13);
      context.closePath();
      context.strokeStyle = '#2f9aff';
      context.fillStyle = '#2f9aff';
      context.fill();
      context.stroke();

      //  sector
      context.beginPath();
      context.moveTo(150, 150);
      context.arc(150, 150, 130 * (r / 5), Math.PI, Math.PI * 3 / 2, false);
      context.closePath();
      context.strokeStyle = '#2f9aff';
      context.fillStyle = '#2f9aff';
      context.fill();
      context.stroke();

      // triangle
      context.beginPath();
      context.moveTo(150, 150);
      context.lineTo(150 - (130 * (r / 5)), 150);
      context.lineTo(150, 150 + r * 13);
      context.lineTo(150, 150);
      context.closePath();
      context.strokeStyle = '#2f9aff';
      context.fillStyle = '#2f9aff';
      context.fill();
      context.stroke();
    } else {
      // rectangle
      context.beginPath();
      context.rect(150, 150, 130 * (r / 5), (r) * 13);
      context.closePath();
      context.strokeStyle = '#2f9aff';
      context.fillStyle = '#2f9aff';
      context.fill();
      context.stroke();

      //  sector
      context.beginPath();
      context.moveTo(150, 150);
      context.arc(150, 150, 130 * (Math.abs(r) / 5), 0, Math.PI / 2, false);
      context.closePath();
      context.strokeStyle = '#2f9aff';
      context.fillStyle = '#2f9aff';
      context.fill();
      context.stroke();

      // triangle
      context.beginPath();
      context.moveTo(150, 150);
      context.lineTo(150 + (130 * (Math.abs(r) / 5)), 150);
      context.lineTo(150, 150 + r * 13);
      context.lineTo(150, 150);
      context.closePath();
      context.strokeStyle = '#2f9aff';
      context.fillStyle = '#2f9aff';
      context.fill();
      context.stroke();
    }
    // axes
    context.beginPath();
    context.font = '10px Verdana';
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.moveTo(150, 0);
    context.lineTo(150, 300);
    context.moveTo(150, 0);
    context.lineTo(145, 15);
    context.moveTo(150, 0);
    context.lineTo(155, 15);
    context.fillText('Y', 160, 10);
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.moveTo(300, 150);
    context.lineTo(285, 145);
    context.moveTo(300, 150);
    context.lineTo(285, 155);
    context.fillText('X', 290, 130);

    // Y parts
    context.moveTo(145, 20);
    context.lineTo(155, 20);
    context.fillText(' 5', 160, 20);
    context.moveTo(145, 46);
    context.lineTo(155, 46);
    context.fillText(' 4', 160, 46);
    context.moveTo(145, 72);
    context.lineTo(155, 72);
    context.fillText(' 3', 160, 72);
    context.moveTo(145, 98);
    context.lineTo(155, 98);
    context.fillText(' 2', 160, 98);
    context.moveTo(145, 124);
    context.lineTo(155, 124);
    context.fillText(' 1', 160, 124);

    context.moveTo(145, 176);
    context.lineTo(155, 176);
    context.fillText('-1', 160, 176);
    context.moveTo(145, 202);
    context.lineTo(155, 202);
    context.fillText('-2', 160, 202);
    context.moveTo(145, 228);
    context.lineTo(155, 228);
    context.fillText('-3', 160, 228);
    context.moveTo(145, 254);
    context.lineTo(155, 254);
    context.fillText('-4', 160, 254);
    context.moveTo(145, 280);
    context.lineTo(155, 280);
    context.fillText('-5', 160, 280);

    // X parts
    context.moveTo(20, 145);
    context.lineTo(20, 155);
    context.fillText('-5', 13, 140);
    context.moveTo(46, 145);
    context.lineTo(46, 155);
    context.fillText('-4', 39, 140);
    context.moveTo(72, 145);
    context.lineTo(72, 155);
    context.fillText('-3', 65, 140);
    context.moveTo(98, 145);
    context.lineTo(98, 155);
    context.fillText('-2', 91, 140);
    context.moveTo(124, 145);
    context.lineTo(124, 155);
    context.fillText('-1', 117, 140);

    context.moveTo(176, 145);
    context.lineTo(176, 155);
    context.fillText(' 1', 169, 140);
    context.moveTo(202, 145);
    context.lineTo(202, 155);
    context.fillText(' 2', 195, 140);
    context.moveTo(228, 145);
    context.lineTo(228, 155);
    context.fillText(' 3', 221, 140);
    context.moveTo(254, 145);
    context.lineTo(254, 155);
    context.fillText(' 4', 247, 140);
    context.moveTo(280, 145);
    context.lineTo(280, 155);
    context.fillText(' 5', 273, 140);

    context.closePath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.stroke();

  }
}
