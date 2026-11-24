import {test} from 'node:test';
import assert from 'node:assert/strict';
import {ticketTotal} from '../src/ticketMath.js';
test('calcula CLP para cantidades enteras',()=>assert.deepEqual(ticketTotal('3'),{quantity:3,total:11400,error:''}));
test('cero y campo vacío muestran total cero',()=>{assert.equal(ticketTotal('').total,0);assert.equal(ticketTotal('0').total,0);});
test('rechaza negativos, fracciones, NaN y desbordamiento',()=>{for(const value of ['-2','1.5','abc','Infinity','9007199254740991']) assert.ok(ticketTotal(value).error);});
