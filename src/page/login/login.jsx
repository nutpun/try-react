import React from 'react'
import './login.css'

export default function Login() {
	return (
		<div class="login-page">
			<div class="form">
				<form class="login-form" action="/home">
					<input type="text" placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ" />
					<input type="password" placeholder="รหัสผ่าน" />
					<button htmlType="submit" className="rounded">
						login
					</button>
				</form>
			</div>
		</div>
	)
}
