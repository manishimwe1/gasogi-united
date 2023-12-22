import DropeZOne from "@/components/DropeZOne";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/typing";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

const page = async () => {
	const { userId } = auth();
	const docsResults = await getDocs(
		collection(db, "users", userId!, "files"),
	);
	const skeletonLoader: FileType[] = docsResults.docs.map(
		(doc) => ({
			id: doc.id,
			filename: doc.data().filename || doc.id,
			fullName: doc.data().fullName,
			timestamp:
				new Date(
					doc.data().timestamp?.seconds * 1000,
				) || undefined,
			downloadUrl: doc.data().downloadUrl,
			type: doc.data().type,
			size: doc.data().size,
		}),
	);
	// console.log(skeletonLoader);
	return (
		<div className='max-w-5xl mx-auto border-t '>
			<div className='flex items-center justify-center'>
				<DropeZOne />
			</div>

			<section className=''>
				<div>
					<h2 className='font-bold '>
						All Files
					</h2>
					<TableWrapper
						skeletonLoader={skeletonLoader}
					/>
				</div>
			</section>
		</div>
	);
};

export default page;
