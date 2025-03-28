import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSectionImages extends Struct.ComponentSchema {
  collectionName: 'components_about_section_images';
  info: {
    displayName: 'images';
    icon: 'picture';
  };
  attributes: {
    first: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    fourth: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    second: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    third: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface AboutSectionImpact extends Struct.ComponentSchema {
  collectionName: 'components_about_section_impacts';
  info: {
    displayName: 'impact';
    icon: 'apps';
  };
  attributes: {
    first: Schema.Attribute.Component<'about-section.impact-element', true>;
    fourth: Schema.Attribute.Component<'about-section.impact-element', true>;
    second: Schema.Attribute.Component<'about-section.impact-element', true>;
    third: Schema.Attribute.Component<'about-section.impact-element', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutSectionImpactElement extends Struct.ComponentSchema {
  collectionName: 'components_about_section_impact_elements';
  info: {
    displayName: 'impact-element';
    icon: 'connector';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-section.images': AboutSectionImages;
      'about-section.impact': AboutSectionImpact;
      'about-section.impact-element': AboutSectionImpactElement;
    }
  }
}
