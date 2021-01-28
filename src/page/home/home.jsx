import { Button, Col, Divider, Image, Layout, Row } from 'antd'
import React, { useState } from 'react'
import './home.css'

export default function Home() {
	const { Header, Content, Footer } = Layout
	const [hover, setHover] = useState(false)
	const [hover2, setHover2] = useState(false)
	const [hover3, setHover3] = useState(false)
	const [hover4, setHover4] = useState(false)
	const [hover5, setHover5] = useState(false)
	const [hoverButton, setHoverButton] = useState(false)

	return (
		<div>
			<Layout>
				<Header style={{ height: 85, backgroundColor: '#000' }}>
					<div />
					<Row
						justify="space-between"
						style={{ paddingLeft: 130, paddingRight: 130, marginTop: 10 }}
					>
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
									<b style={{ color: hover2 ? 'greenyellow' : 'white', fontSize: 16 }}>
										การสนับสนุน
									</b>
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
									<b style={{ color: hover5 ? 'greenyellow' : 'white', fontSize: 16 }}>
										เข้าสู่ระบบ
									</b>
								</Col>
							</Row>
						</Col>
					</Row>
				</Header>
				<Layout>
					<div className="home">
						<b style={{ color: '#1ed760', fontSize: 150, marginLeft: 200 }}>Listening is</b>

						<p>
							<b style={{ color: '#1ed760', fontSize: 150, paddingLeft: 400 }}>everything</b>
						</p>

						<p
							style={{
								color: '#1ed760',
								fontSize: 18,
								paddingTop: 20,
								paddingBottom: 20,
								textAlign: 'center',
							}}
						>
							เพลงและพอดแคสต์หลายล้านรายการ ไม่ต้องใช้บัตรเครดิต
						</p>

						<center>
							<Button
								type="primary"
								shape="round"
								style={{
									background: hoverButton ? 'white' : '#1ed760',
									borderColor: hoverButton ? 'white' : '#1ed760',
									fontSize: 20,
									width: 200,
									height: 45,
									color: '#2d46b9',
									fontSize: 16,
								}}
								onMouseEnter={() => setHoverButton(true)}
								onMouseLeave={() => setHoverButton(false)}
							>
								ใช้ SPOTIFY FREE
							</Button>
						</center>
					</div>
				</Layout>
				<Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
					<Row style={{ paddingLeft: 130, paddingRight: 130, marginTop: 50 }}>
						<Col>
							<Image
								width={140}
								src={`https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png`}
							/>
						</Col>
						<Col style={{ textAlign: 'left', paddingLeft: 50 }}>
							<Col style={{ color: 'gray' }}>บริษัท</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>เกี่ยวกับ</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>งาน</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>For the Record</Col>
						</Col>
						<Col style={{ textAlign: 'left', paddingLeft: 100 }}>
							<Col style={{ color: 'gray' }}>ชุมชน</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>สำหรับศิลปิน</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>ผู้พัฒนา</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>โฆษณา</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>นักลงทุน</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>ผู้ให้บริการ</Col>
						</Col>
						<Col style={{ textAlign: 'left', paddingLeft: 100 }}>
							<Col style={{ color: 'gray' }}>ลิงก์ที่เป็นประโยชน์</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>การสนับสนุน</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>Web Player</Col>
							<Col style={{ fontSize: 16, marginTop: 18 }}>แอพมือถือฟรี</Col>
						</Col>
						<Row style={{ textAlign: 'right', paddingLeft: 230 }}>
							<Image
								width={60}
								src={`https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png`}
							/>
							<Image
								width={80}
								src={`https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png`}
							/>
							<Image
								style={{ paddingTop: 13, paddingLeft: 10 }}
								width={40}
								src={`https://img.pngio.com/twitter-icon-black-background-158457-free-icons-library-twitter-logo-white-transparent-1982_1982.jpg`}
							/>
						</Row>
					</Row>
					<Row style={{ paddingLeft: 130, paddingRight: 130, marginTop: 100 }}>
						<Col style={{ color: 'gray', fontSize: 12, marginLeft: 18 }}>กฎหมาย</Col>
						<Col style={{ color: 'gray', fontSize: 12, marginLeft: 18 }}>ศูนย์ความเป็นส่วนตัว</Col>
						<Col style={{ color: 'gray', fontSize: 12, marginLeft: 18 }}>นโยบายความเป็นส่วนตัว</Col>
						<Col style={{ color: 'gray', fontSize: 12, marginLeft: 18 }}>Cookies</Col>
						<Col style={{ color: 'gray', fontSize: 12, marginLeft: 18 }}>เกี่ยวกับโฆษณา</Col>
						<Col style={{ paddingLeft: 500, textAlign: 'right' }}>
							<text style={{ color: 'gray', fontSize: 12 }}>ประเทศไทย (ไทย)</text>
							<Image
								style={{ paddingLeft: 10 }}
								width={30}
								src={`https://cdn.pixabay.com/photo/2013/07/12/17/58/thailand-152711_960_720.png`}
							/>
							<Col style={{ color: 'gray', fontSize: 12 }}>© 2021 Spotify AB</Col>
						</Col>
					</Row>
				</Footer>
			</Layout>
		</div>
	)
}
