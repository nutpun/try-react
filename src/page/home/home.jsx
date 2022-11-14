import { Button, Col, Image, Layout, Row } from 'antd'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import './home.css'
export default function Home() {
	const { Footer } = Layout
	const [hoverButton, setHoverButton] = useState(false)

	return (
		<div>
			<Layout>
				<Layout>
					<Navbar />

					<div
						style={{
							backgroundImage: `url("https://www.scdn.co/i/home/lieVariants/bursts-tablet.svg")`,
							backgroundSize: 2000,
							backgroundColor: '#2d46b9',
						}}
						className="px-64 py-20"
					>
						<div
							style={{ color: '#1ed760' }}
							className="sm:text-xl md:text-6xl  xl:text-11xl  font-bold text-center lg:text-left"
						>
							Listening is
						</div>

						<div
							style={{ color: '#1ed760' }}
							className="sm:text-xl md:text-6xl  xl:text-11xl  font-bold text-center lg:text-right"
						>
							everything
						</div>

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
							<Image width={140} src={`https://cdn-icons-png.flaticon.com/512/174/174872.png`} />
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
