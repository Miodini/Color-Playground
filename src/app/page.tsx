'use client'
import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { ColorsProvider } from '@/components/Context'
import Blend from '@/components/Blend'
import Sum from '@/components/Sum'
import Diff from '@/components/Diff'

enum TabKeys { Blend = 'blend', Sum = 'sum', Diff = 'diff' }

export default function Home() {
  const [activeKey, setActiveKey] = useState<string>(TabKeys.Blend)	

  return (
    <ColorsProvider>
      <Tabs
        activeKey={activeKey}
        onSelect={tab => setActiveKey(tab || TabKeys.Blend)}
        className="mb-3"
      >
        <Tab eventKey={TabKeys.Blend} title="Blend">
          <Blend />
        </Tab>
        <Tab eventKey={TabKeys.Sum} title="Sum">
          <Sum />
        </Tab>
        <Tab eventKey={TabKeys.Diff} title="Difference">
          <Diff />
        </Tab>
      </Tabs>
    </ColorsProvider>
  )
};
  