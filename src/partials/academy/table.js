import React from 'react'


const Table = () => (
	<section className="feature-table">
		<div className="feature-table__container">
			<h2 className="feature-table__heading">Choose your learning plan</h2>
			<div className="feature-table__table">
				<table cellspacing="0">
					<tbody>
						<tr>
							<th scope="col"></th>
							<th scope="col">Personal</th>
							<th scope="col">Team</th>
							<th scope="col">Enterprise</th>
						</tr>
						<tr>
							<th scope="row" className="row-heading">
								Video Lectures
							</th>
							<td className="table-item">✔</td>
							<td className="table-item">✔</td>
							<td className="table-item">✔</td>
						</tr>
						<tr>
							<th scope="row" className="row-heading">
								Online Forums
							</th>
							<td className="table-item">✔</td>
							<td className="table-item">✔</td>
							<td className="table-item">✔</td>
						</tr>
						<tr>
							<th scope="row" className="row-heading">
								Audio Playback
							</th>
							<td className="table-item">✔</td>
							<td className="table-item">✔</td>
							<td className="table-item">✔</td>
						</tr>
						<tr>
							<th scope="row" className="row-heading">
								Lecture Downloads
							</th>
							<td className="table-item"></td>
							<td className="table-item">✔</td>
							<td className="table-item">✔</td>
						</tr>
						<tr>
							<th scope="row" className="row-heading">
								In-Person Workshops
							</th>
							<td className="table-item"></td>
							<td className="table-item">✔</td>
							<td className="table-item">✔</td>
						</tr>
						<tr>
							<th scope="row" className="row-heading">
								24 Hour Support
							</th>
							<td className="table-item"></td>
							<td className="table-item"></td>
							<td className="table-item">✔</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
)

export default Table
