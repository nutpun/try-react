import { Col, Divider, Image, Layout, Row } from 'antd'
import React, { useState } from 'react'

const Navbar = () => {
	const { Header, Content, Footer } = Layout
	const [hover, setHover] = useState(false)
	const [hover2, setHover2] = useState(false)
	const [hover3, setHover3] = useState(false)
	const [hover4, setHover4] = useState(false)
	const [hover5, setHover5] = useState(false)
	return (
		<Header style={{ height: 85, backgroundColor: '#000' }} className="fixed w-screen">
			<div />
			<Row justify="space-between" style={{ paddingLeft: 130, paddingRight: 130, marginTop: 10 }}>
				<Col>
					<Image
						width={140}
						src={`https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png`}
					/>
				</Col>

				<Col>
					<Row>
						<Col
							style={{ marginRight: 30 }}
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
						>
							<b style={{ color: hover ? 'greenyellow' : 'white', fontSize: 16 }}>Premium</b>
						</Col>
						<Col
							style={{ marginRight: 30 }}
							onMouseEnter={() => setHover2(true)}
							onMouseLeave={() => setHover2(false)}
						>
							<b style={{ color: hover2 ? 'greenyellow' : 'white', fontSize: 16 }}>การสนับสนุน</b>
						</Col>
						<Col
							style={{ marginRight: 30 }}
							onMouseEnter={() => setHover3(true)}
							onMouseLeave={() => setHover3(false)}
						>
							<b style={{ color: hover3 ? 'greenyellow' : 'white', fontSize: 16 }}>ดาวน์โหลด</b>
						</Col>
						<Divider
							type="vertical"
							style={{ backgroundColor: 'white', height: 20, marginTop: 25, marginRight: 30 }}
						/>
						<Col
							style={{ marginRight: 30 }}
							onMouseEnter={() => setHover4(true)}
							onMouseLeave={() => setHover4(false)}
						>
							<b style={{ color: hover4 ? 'greenyellow' : 'white', fontSize: 16 }}>ลงทะเบียน</b>
						</Col>
						<Col
							style={{ marginRight: 30 }}
							onMouseEnter={() => setHover5(true)}
							onMouseLeave={() => setHover5(false)}
						>
							<b style={{ color: hover5 ? 'greenyellow' : 'white', fontSize: 16 }}>เข้าสู่ระบบ</b>
						</Col>
					</Row>
				</Col>
			</Row>
		</Header>
	)
}
export default Navbar
