import React from 'react';

export default function Page() {
	let numberOfPublishers = 20;
	let monthlyFee = 99;
	let numberOfSubscribers = 100000;
	let monthlyRevenue = numberOfSubscribers * monthlyFee;
	let poolSize = monthlyRevenue * 0.7;
	let numberOfReads = 1000000;

	function formatAmount(amount) {
		return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	return (
		<div className='flex flex-col w-full min-h-screen'>
			<div>
				<p>
					<b>Number of publisher:</b> {numberOfPublishers}
				</p>
				<p>
					<b>Monthly subscription fee:</b> {monthlyFee} DKK
				</p>
				<p>
					<b>Number of subscribers:</b> {formatAmount(numberOfSubscribers)}
				</p>
				<p>
					<b>Monthly revenue:</b> {formatAmount(monthlyRevenue)} DKK
				</p>
				<p>
					<b>Pool size:</b> {formatAmount(poolSize.toFixed(0))} DKK
				</p>
				<p>
					<b>Number of reads:</b> {formatAmount(numberOfReads)}
				</p>
			</div>
			<div className='flex w-full p-20'>
				<table className='bg-light-grey border-[1px] border-grey'>
					<thead>
						<tr className=''>
							<th className='p-8'>Publisher</th>
							<th className='p-8'>Antal læsninger</th>
							<th className='p-8'>Procentdel</th>
							<th className='p-8'>Udbetaling</th>
						</tr>

						{(() => {
							let readsPerPublisher = Array.from(
								{ length: numberOfPublishers },
								() => Math.floor(Math.random() * numberOfReads),
							);
							let totalReads = readsPerPublisher.reduce((a, b) => a + b, 0);
							let scale = numberOfReads / totalReads;
							readsPerPublisher = readsPerPublisher.map((reads) =>
								Math.floor(reads * scale),
							);
							let publishers = readsPerPublisher.map((reads, publisher) => {
								let percentage = (reads / numberOfReads) * 100;
								let monthlyPublisherRevenue = (percentage * poolSize) / 100;
								return {
									name: `Publisher ${publisher + 1}`,
									reads: reads,
									percentage: percentage.toFixed(2),
									revenue: `${
										monthlyPublisherRevenue.toFixed(2)} DKK`,
								};
							});
							publishers.sort((a, b) => b.reads - a.reads);
							return publishers
								.map((publisher) => (
									<tr className=''>
										<td className='p-8'>{publisher.name}</td>
										<td className='p-8'>{formatAmount(publisher.reads)}</td>
										<td className='p-8'>{publisher.percentage}%</td>
										<td className='p-8'>{formatAmount(publisher.revenue)}</td>
									</tr>
								))
								.concat(
									<tr className=''>
										<td className='p-8'>
											<b>Total</b>
										</td>
										<td className='p-8'>
											<b>
												{formatAmount(
													readsPerPublisher.reduce((a, b) => a + b, 0),
												)}
											</b>
										</td>
										<td className='p-8'>
											<b>100%</b>
										</td>
										<td className='p-8'>
											<b>
												{formatAmount(
													publishers.reduce((a, b) => parseFloat(a.revenue) + parseFloat(b.revenue), 0),
												)}{' '}
												DKK
											</b>
										</td>
									</tr>,
								);
						})()}
					</thead>
				</table>
			</div>
		</div>
	);
}
