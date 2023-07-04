import * as React from 'react';
import type { PortableTextBlock } from '@portabletext/types';
import BlockContentParser from './customComponents/BlockContentParser';



export const RichText = ({ values, className }: { values: PortableTextBlock[], className?: string }) => {
  return (
    <div className={className ? className : ''}>
      <BlockContentParser content={values as any} />
    </div>
  )
}

export default RichText
