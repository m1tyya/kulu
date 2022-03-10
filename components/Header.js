import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
	HomeIcon,
	LightningBoltIcon,
	BadgeCheckIcon,
	CollectionIcon,
	SearchIcon,
	UserIcon
} from "@heroicons/react/outline";

function Header() {
	return (
		<header className="flex flex-col sm:flex-row m-10 justify-between items-center h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItem title={"Home"} Icon={HomeIcon}/>
				<HeaderItem title={"Trending"} Icon={LightningBoltIcon}/>
				<HeaderItem title={"Verified"} Icon={BadgeCheckIcon}/>
				<HeaderItem title={"Collections"} Icon={CollectionIcon}/>
				<HeaderItem title={"Search"} Icon={SearchIcon}/>
				<HeaderItem title={"Account"} Icon={UserIcon}/>
			</div>
			<div className="mb-7">
				<Image
					src="/images/logo.svg"
					width={200}
					height={80}
				/>
			</div>
		</header>
	);
}

export default Header;
