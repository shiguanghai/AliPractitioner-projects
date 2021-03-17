import React from 'react';
// import ReactDOM from 'react-dom';
import { Chart, Interval, Tooltip } from 'bizcharts';
import { Table } from '@alifd/next';

const { Column } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    sales: [
			{ year: '1951', sales: 18 },
			{ year: '1952', sales: 32 },
			{ year: '1956', sales: 51 },
			{ year: '1957', sales: 45 },
			{ year: '1958', sales: 68 },
			{ year: '1959', sales: 58 },
			{ year: '1960', sales: 38 },
			{ year: '1962', sales: 68 },
		],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    sales: [
			{ year: '1951', sales: 18 },
			{ year: '1952', sales: 32 },
			{ year: '1956', sales: 61 },
			{ year: '1957', sales: 55 },
			{ year: '1958', sales: 48 },
			{ year: '1959', sales: 38 },
			{ year: '1960', sales: 48 },
			{ year: '1962', sales: 28 },
		],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    sales: [
			{ year: '1951', sales: 38 },
			{ year: '1952', sales: 52 },
			{ year: '1956', sales: 61 },
			{ year: '1957', sales: 35 },
			{ year: '1958', sales: 48 },
			{ year: '1959', sales: 38 },
			{ year: '1960', sales: 28 },
			{ year: '1962', sales: 18 },
		],
  },
];


function Demo() {
  return <div style={{ textAlign: 'center' }}>
		<Table dataSource={data} pagination={false}>
			<Column width={100} title="First Name" dataIndex="firstName" key="firstName" />
			<Column width={100} title="Last Name" dataIndex="lastName" key="lastName" />
			<Column
				title="sales"
				dataIndex="sales"
				key="sales"
				cell={arr => JSON.stringify(arr)}
				cell={sales => (
					<div style={{ height: 40 }}>
					  <Chart data={sales} autoFit pure >
							<Interval position="year*sales" />
							<Tooltip linkage="sameKey" region={{ start: ['0%', '0%'], end: ['200%', '200%'] }}  shared >
							  {
									// 配置相同的linkage 就会使得 tooltip互相关联
									(titile, items) => {
										return `${items[0].data.year}:${items[0].data.sales}`;
									}
								}
							</Tooltip>
						</Chart>
					</div>
				)}
			/>
			<Column width={100} title="Age" dataIndex="age" key="age" />
  	</Table>
  </div>
}

// ReactDOM.render(<Demo />, mountNode);

export default Demo
