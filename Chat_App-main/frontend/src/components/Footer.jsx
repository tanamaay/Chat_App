import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-full min-h-32  shadow-gray-950 shadow-inner flex flex-col justify-between items-start px-4 py-8 bg-slate-800 text-white">
			<h1 className="font-bold text-lg flex items-center gap-4">
				<span>Chat Application</span>
				<FaPenAlt fontSize={16} />
			</h1>
			<div className="flex items-center justify-start w-full p-4 flex-wrap">
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Contact</h1>
					<span>Tanamay</span>
					<span>Varanasi</span>
					<span>221302</span>
					<span>
						<Link
							to={"mailto:contact.tanamay12102001@gmail.com"}
							target="_blank"
							className="hover:text-green-600 hover:underline"
						>
							contact.tanamay12102001@gmail.com
						</Link>
					</span>
				</div>
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Pages</h1>
					<span>
						<Link
							className="hover:text-green-600 hover:underline"
							to={"/"}
						>
							Chat App
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-blue-600 hover:underline"
							to={"/signin"}
						>
							SingIn
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-blue-600 hover:underline"
							to={"/contact"}
						>
							Contact
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-blue-600 hover:underline"
							to={"/about"}
						>
							About
						</Link>
					</span>
				</div>
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Links</h1>
					<span>
						<a
							className="hover:text-blue-600 hover:underline"
							href=""
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</span>
					<span>
						<a
							className="hover:text-blue-600 hover:underline"
							href=""
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
					</span>
					<span>
						<a
							className="hover:text-blue-600 hover:underline"
							href=""
							target="_blank"
							rel="noreferrer"
						>
							Instagram
						</a>
					</span>
					<span>
						<a
							className="hover:text-blue-600 hover:underline"
							href="mailto:contact.tanamay12102001@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							E-Mail
						</a>
					</span>
				</div>
			</div>
			<h1 className="font-bold">
				All rights reserved 2024 &copy; ChatApp
			</h1>
		</div>
	);
};

export default Footer;
