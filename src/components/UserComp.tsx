import { useState } from 'react'
import {
    EditOutlined,
    DeleteFilled,
    HeartTwoTone,
    HeartFilled,
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
} from '@ant-design/icons'
import { Card, Typography, Button, Modal, Form, Input } from 'antd'
const { Meta } = Card

const { Paragraph } = Typography

import { UserType } from '../types/UserType'

export default function UserComp(props: any) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onFinish = (values: UserType) => {
        Object.assign(values, { avatar: props.data.avatar })
        props.updateUser(props.data.id, values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Card
            style={{ width: 500 }}
            cover={
                <img
                    style={{
                        backgroundColor: '#f5f5f5',
                    }}
                    width={200}
                    height={200}
                    src={props.data.avatar}
                />
            }
            actions={[
                <Paragraph
                    copyable={{
                        tooltips: false,
                        icon: [
                            <HeartTwoTone
                                twoToneColor="#eb0000"
                                key="copy-icon"
                            />,
                            <HeartFilled color="#eb0000" key="copied-icon" />,
                        ],
                    }}
                    key="setting"
                />,

                <EditOutlined onClick={showModal} />,

                <DeleteFilled
                    onClick={() => {
                        props.deleteUser(props.data.id)
                    }}
                />,
            ]}
        >
            <Meta title={props.data.name} />
            <Paragraph>
                <MailOutlined
                    style={{
                        marginTop: 20,
                        marginRight: 7,
                    }}
                />
                {props.data.email}
            </Paragraph>
            <Paragraph>
                <PhoneOutlined
                    style={{
                        marginRight: 7,
                    }}
                />
                {props.data.phone}
            </Paragraph>
            <Paragraph>
                <GlobalOutlined
                    style={{
                        marginRight: 7,
                    }}
                />
                {'http://' + props.data.website}
            </Paragraph>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button form="main1Form" key="submit" htmlType="submit">
                        Submit
                    </Button>,
                ]}
            >
                <Form
                    id="main1Form"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{
                        name: props.data.name,
                        email: props.data.email,
                        phone: props.data.phone,
                        website: props.data.website,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Website"
                        name="website"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    )
}
