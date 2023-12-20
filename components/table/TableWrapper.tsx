import { FileType } from "@/typing";
import React from "react";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./Columns";

const TableWrapper = ({
	skeletonLoader,
}: {
	skeletonLoader: FileType[];
}) => {
	return (
		<div>
			<Button>Sort by...</Button>
			<DataTable
				columns={columns}
				data={skeletonLoader}
			/>
		</div>
	);
};

export default TableWrapper;
