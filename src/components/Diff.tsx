import React from 'react'
import Base from './Base'
import { subtractColors } from '@/lib/utils'

export default function Diff() {
  return <Base colorFn={subtractColors} />
}