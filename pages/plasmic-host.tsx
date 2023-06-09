
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../plasmic-init';
import RichText from "../components/PortableText";
import ContactForm from "../components/customComponents/contactForm";

import { registerComponent } from '@plasmicapp/react-web/lib/host';

registerComponent(RichText, {
  name: "RichText",
  props: {
    values: 'object',
    className: 'string',
  },
  importPath: './components/PortableText',
});

registerComponent(ContactForm, {
  name: "ContactForm",
  props: {
    className: 'string',
  },
  importPath: './components/customComponents/contactForm',
})

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}

