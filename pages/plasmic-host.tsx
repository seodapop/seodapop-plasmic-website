
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import RichText from "../components/PortableText";

import { registerComponent } from '@plasmicapp/react-web/lib/host';

registerComponent(RichText, {
  name: "RichText",
  props: {
    values: 'object',
    className: 'string',
  },
  importPath: './components/PortableText',
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

