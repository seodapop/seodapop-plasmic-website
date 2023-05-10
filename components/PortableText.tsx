import * as React from 'react';
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

const RichText = ({ values, className }: { values: PortableTextBlock[], className?: string }) => {
  return (
    <div className={className ? className : ''}>
      <PortableText
        value={values}
      />
    </div>
  )
}

export default RichText