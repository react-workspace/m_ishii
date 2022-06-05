import Circle from 'react-circle';
import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills';

export const Skills = () => {

	const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();

	return (
		<div className="id">
			<div className="conainer">
				<div className="heading">
					<h2>Skills</h2>
				</div>
				<div className="skills-container">
					 {
						fetchRequestState === requestStates.loading && (
              <p className="description">取得中...</p>
            )
					}
					{
						fetchRequestState === requestStates.success && (
							sortedLanguageList().map((item, index) => (
								<div className="skill-item" key={index}>
									<p className="description"><strong>{item.language}</strong></p>
									<Circle
										animate
										progress={converseCountToPercentage(item.count)}
									/>
								</div>
							))
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Skills
