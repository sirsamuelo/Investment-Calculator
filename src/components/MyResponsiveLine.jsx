import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';

const MyResponsiveLine = ({ data  }) => (
	<ResponsiveLine
		theme={{
			fontSize: 13,
			textColor: 'black',
			grid: {
				line: {
					stroke: 'grey',
					strokeWidth: 1,
					strokeDasharray: '4 4'
				}
			}
		}}
		enableArea={true}
		data={data}
		colors={{ scheme: 'category10' }}
		margin={{ top: 50, right: 150, bottom: 50, left: 150 }}
		xScale={{ type: 'point' }}
		yScale={{
			type: 'linear',
			min: 'auto',
			max: 'auto',
			reverse: false
		}}
		yFormat=" >-.2f"
		axisTop={null}
		axisRight={null}
		axisBottom={{
			orient: 'bottom',
			tickSize: 1,
			tickPadding: 1,
			tickRotation: 0,
			legend: 'Duration',
			legendOffset: 35,
			legendPosition: 'middle'
		}}
		axisLeft={{
			orient: 'left',
			tickSize: 5,
			tickPadding: 10,
			tickRotation: 0,
			legend: 'Money €',
			legendOffset: -60,
			legendPosition: 'middle'

		}}
		lineWidth={4}
		pointSize={5}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={5}
		pointBorderColor={{ from: 'serieColor' }}
		pointLabelYOffset={12}
		useMesh={true} //true ? 
		legends={[
			{
				anchor: 'top',
				direction: 'column',
				justify: false,
				translateX: 0,
				translateY: -50,
				itemsSpacing: 0,
				itemDirection: 'left-to-right',
				itemWidth: 80,
				itemHeight: 20,
				itemOpacity: 0.75,
				symbolSize: 12,
				symbolShape: 'circle',
				symbolBorderColor: 'rgba(0, 0, 0, .5)',
				effects: [
					{
						on: 'hover',
						style: {
							itemBackground: 'rgba(0, 0, 0, .03)',
							itemOpacity: 1
						}
					}
				]
			}
		]}
	/>
);

MyResponsiveLine.propTypes = {
	data: PropTypes.array.isRequired, 
};


export default MyResponsiveLine;