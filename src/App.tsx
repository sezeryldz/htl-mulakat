import { useEffect, useState } from 'react'
import 'antd/dist/antd.css'

import JolApi from './libs/JolApi'
import { UserType } from './types/UserType'
import UserComp from './components/UserComp'

import { Col, Row } from 'antd'

function App() {
    const [users, setUsers] = useState<UserType[]>([])

    const jolapi = new JolApi()

    useEffect(() => {
        jolapi.getAll().then((users: any) => {
            setUsers(users)
        })
    }, [])

    const deleteUser = (id: number) => {
        setUsers(users.filter((item) => item.id !== id))
    }

    const updateUser = (id: number, updatedUser: UserType) => {
        setUsers((current) =>
            current.map((obj) => {
                if (obj.id === id) {
                    return updatedUser
                }
                return obj
            })
        )
    }

    return (
        <div className="App">
            <Row gutter={[16, 16]}>
                {users.map((user) => (
                    <Col className="gutter-row" sm={24} md={8} lg={8} xl={6}>
                        <UserComp
                            key={user.id}
                            deleteUser={deleteUser}
                            updateUser={updateUser}
                            data={user}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default App
