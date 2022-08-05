import { Space, Spin, Row, Col } from 'antd'
export default function LoadingComponent() {
    return (
        <Row>
            <Col span={12} offset={12}>
                <Space size="middle">
                    <Spin size="large" />
                </Space>
            </Col>
        </Row>
    )
}
