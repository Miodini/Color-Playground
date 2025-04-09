import React from 'react'
import Base from './Base'
import { blendColors } from '@/lib/utils'

export default function Blend() {
  return <Base colorFn={blendColors} />
}