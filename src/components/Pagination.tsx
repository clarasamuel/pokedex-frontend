import React, {FunctionComponent} from 'react';

/**
 * Attention dans ce composant : car on les pages sont affiché à page + 1
 * En effet la page 1 vaut 0.
 * @param page
 * @param setPage
 * @constructor
 */
const Pagination: FunctionComponent<{page: number, setPage: (newPage: number) => void }> = ({page, setPage}) => {

	return (
		<div>
			<nav className="inline-flex bg-pokemon-dark-purple" aria-label="Pagination">
				<div
					onClick={() => setPage(page > 0 ? page - 1 : 0)}
					className="cursor-pointer items-center rounded-l-md border px-2 py-2"
				>
					<span className="sr-only">Previous</span>
					<svg
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				{
					page > 1 && <span className="items-center border px-4 py-2">...</span>
				}
				{
					page > 0 &&
					<div
						onClick={() => setPage(page-1)}
						className="cursor-pointer items-center border px-4 py-2"
					>
						{page}
					</div>
				}
				<div
					className="items-center border px-4 py-2 bg-pokemon-darkest-purple"
				>
					{page+1}
				</div>
				<div
					onClick={() => setPage(page + 1)}
					className="cursor-pointer items-center border px-4 py-2"
				>
					{page+2}
				</div>
				<span className="items-center border px-4 py-2">...</span>
				<div
					onClick={() => setPage(page + 1)}
					className="cursor-pointer items-center rounded-r-md border px-2 py-2">
					<span className="sr-only">Next</span>
					<svg
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						 aria-hidden="true"
					>
						<path fill-rule="evenodd"
							  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							  clip-rule="evenodd"/>
					</svg>
				</div>
			</nav>
		</div>
	);
}

export default Pagination;
