import type { Schema, Attribute } from '@strapi/strapi';

export interface BrocheType extends Schema.Component {
  collectionName: 'components_broche_types';
  info: {
    displayName: 'Type';
    description: '';
  };
  attributes: {
    Made: Attribute.String;
  };
}

export interface PaysMadeIn extends Schema.Component {
  collectionName: 'components_pays_made_ins';
  info: {
    displayName: 'Made in';
  };
  attributes: {
    Pays: Attribute.String;
  };
}

export interface PaysMade extends Schema.Component {
  collectionName: 'components_pays_mades';
  info: {
    displayName: 'Made';
  };
  attributes: {
    Pays: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'broche.type': BrocheType;
      'pays.made-in': PaysMadeIn;
      'pays.made': PaysMade;
    }
  }
}
