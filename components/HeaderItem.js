import Image from "next/image";

function HeaderItem({ title, Icon }) {
	return (
		<div className="group flex flex-col items-center cursor-pointer w-14 sm:w-30 mr-4 hover:text-white">
			<Icon className="mb-1 group-hover:animate-bounce"/>
			<p className="opacity-0 group-hover:opacity-100 tracking-widest">{title.toUpperCase()}</p>
		</div>
	);
}

export default HeaderItem;
