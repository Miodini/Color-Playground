'use client'
import { useEffect, useState } from "react"
import { Tabs, Tab } from "react-bootstrap"
import { getRandomColor } from "@/lib/utils"
import Blend from "@/components/blend"
import Sum from "@/components/sum"

enum TabKeys { Blend = 'blend', Sum = 'sum' }

export default function Home() {
  const [colors, setColors] = useState<string[]>([])
  const [activeKey, setActiveKey] = useState<string>(TabKeys.Blend)	

  useEffect(() => {
    setColors([getRandomColor(), getRandomColor()])
  }, [])

  return (
    <>
      <Tabs
        activeKey={activeKey}
        onSelect={tab => setActiveKey(tab || TabKeys.Blend)}
        className="mb-3"
      >
        <Tab eventKey={TabKeys.Blend} title="Blend">
          <Blend colors={colors} setColors={setColors} />
        </Tab>
        <Tab eventKey={TabKeys.Sum} title="Sum">
          <Sum colors={colors} setColors={setColors} />
        </Tab>
      </Tabs>
    </>
  )
}
  