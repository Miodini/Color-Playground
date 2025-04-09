import React from 'react'
import Base from './Base'
import { sumColors } from '@/lib/utils'

export default function Sum() {
  return <Base colorFn={sumColors} />
}