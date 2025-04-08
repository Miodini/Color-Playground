import { Row, Col, Form, Card } from "react-bootstrap"
import { useColors } from "./Context"

type BaseProps = {
  colorFn: (colors: string[]) => string
}

export default function Base({ colorFn }: BaseProps) {
  const { colors, setColors } = useColors()
  const result = colorFn(colors)
  const textColor = parseInt(result.slice(1), 16) >= 0x7FFFFF ? "#000" : "#fff"

  return (
    <Card.Body>
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
            style={{ backgroundColor: result, color: textColor }}
          >
            {result}
          </Card>
        </Col>
      </Row>
    </Card.Body>
  )
}
  