"use client"
import { useState, useEffect } from "react"
import UsersCard from "@/components/UsersCard"
import Navbar from "@/components/Navbar"

const Dashboard = () => {
	const [dataUsers, setDataUsers] = useState(null)
	const [search, setSearch] = useState("")
	const [isUserFound, setIsUserFound] = useState(true);
	const [hasSearched, setHasSearched] = useState(false);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('http://localhost:3000/usuarios')
				const data = await response.json()
				console.log('data', data)
				setDataUsers(data)
			}
			catch (error) {
				console.log('error al cargar usuarios', error)
			}
		}
		fetchUsers()
	}, [])

	const filter = (searchBy) => {
		setSearch(searchBy)
		setIsUserFound(true);
		setHasSearched(true);
	};

	const userExists = dataUsers && dataUsers?.some((item) => item.id.toString() === search);

	return (
		<section className="dashboard">
			<div className="dashboard-spacer">
				<Navbar></Navbar>
			</div>
			<div className="dashboard-container">
				<div className="dashboard-title">
					<h1>¡Bienvenido al sistema!</h1>
				</div>
				<div className="dashboard-text">Puedes hacer búsqueda de los usuarios mediante un ID</div>
				<div className="dashboard-form">
					<input
						placeholder="Buscar usuario por ID"
						type="text"
						name=""
						id=""
						onChange={(e) => filter(e.target.value)}
					/>
				</div>
				<div className="dashboard-cardContainer">
					{
						dataUsers && dataUsers.map((item, index) => {
							if (item.id.toString() === search) {
								return (
									<div key={index}>
										<UsersCard user={item} />
									</div>
								)
							}
						})
					}
					{!userExists && hasSearched && <p className="dashboard-cardContainer-non-existent">No existen registros para el ID proporcionado.</p>}
				</div>
			</div>
		</section>
	)
}
export default Dashboard