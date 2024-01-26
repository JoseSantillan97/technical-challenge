import styles from './../styles/style.scss'
export default function UsersCard({ user }) {
	return (
		<section className="userCard">
			<label htmlFor="">ID</label>
			<input disabled type="text" name="" id="" value={user.id} /><br />
			<label htmlFor="">Nombre</label>
			<input disabled type="text" name="" id="" value={user.nombre} /><br />
			<label htmlFor="">Apellido paterno</label>
			<input disabled type="text" name="" id="" value={user.apellido_paterno} /><br />
			<label htmlFor="">Apellido materno</label>
			<input disabled type="text" name="" id="" value={user.apellido_materno} />
		</section>
	)
}