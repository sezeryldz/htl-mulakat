import { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import JolApi from './libs/JolApi'
import { UserType } from './types/UserType'
import UserComp from './components/UserComp'
import LoadingComponent from './components/LoadingComponent'

import { Col, Row } from 'antd'

function App() {
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(false)

    const jolapi = new JolApi()

    useEffect(() => {
        setLoading(true)
        jolapi
            .getAll()
            .then((users: any) => {
                setUsers(users)
            })
            .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
            .finally(() => {
                setLoading(false)
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
    if (loading) {
        return <LoadingComponent />
    }

    return (
        <div className="App">
            <Row gutter={[16, 16]}>
                {users.map((user) => (
                    <Col
                        className="gutter-row"
                        xs={24}
                        sm={16}
                        md={12}
                        lg={8}
                        xl={6}
                    >
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
