'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react"
import { Row, Col, Form, Card } from "react-bootstrap"
import { blendColors, rgbToHex, hexToRgb } from "@/lib/utils"

export default function Home() {
    const [colors, setColors] = useState<string[]>([])
    
    useEffect(() => {
      // Initiate to 2 colors
      setColors([
        rgbToHex(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)),
        rgbToHex(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))
    ])
    }, [])
  
    const blendedColor = blendColors(colors)
    const textColor = parseInt(blendedColor.slice(1), 16) >= 0x7FFFFF ? "#000" : "#fff"
  
    return (
      <Card.Body>
        <Card.Text className="text-center">
          Blend two colors and see the result!
        </Card.Text>
        <Row className="center">
          {colors.map((color, index) => (
            <Col key={index} className='center'>
              <Form.Group controlId={`color${index}`} className="mb-3">
                <Form.Label>Color {index + 1}</Form.Label>
                <Form.Control
                  type="color"
                  value={color}
                  onChange={(e) => {
                    const newColors = [...colors]
                    newColors[index] = e.target.value
                    setColors(newColors)
                  }}
                />
              </Form.Group>
            </Col>
          ))}
        </Row>
        <Row className="center mt-3">
          <Col>
            <h3 className="text-center">Result</h3>
            <Card
              className="p-3 mt-3 text-center"
              style={{ backgroundColor: blendedColor, color: textColor }}
            >
              {blendedColor}
            </Card>
          </Col>
        </Row>
      </Card.Body>
    )
  }
  