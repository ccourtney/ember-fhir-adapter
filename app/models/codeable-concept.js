// Generated by CoffeeScript 1.9.3
import DS from 'ember-data';
var CodeableConcept;

CodeableConcept = DS.Model.extend({
  coding: DS.hasMany('coding', {embedded: true}),
  text: DS.attr('string')
});

export default CodeableConcept;
