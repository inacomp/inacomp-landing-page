"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type NavLink = {
	href: string;
	label: string;
};

type MobileNavMenuProps = {
	navLinks: NavLink[];
};

export function MobileNavMenu({ navLinks }: MobileNavMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	// Variants for the staggered animation of menu items
	const containerVariants: Variants = {
		open: {
			transition: {
				staggerChildren: 0.06,
				delayChildren: 0.2,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.04,
				staggerDirection: -1,
			},
		},
	};

	const itemVariants: Variants = {
		open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: [0.16, 1, 0.3, 1], // Fluid ease-out
			},
		},
		closed: {
			opacity: 0,
			y: -12,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen((open) => !open)}
				className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-slate-200 bg-slate-50 text-foreground hover:border-brand-primary/35 hover:bg-white lg:hidden"
				aria-expanded={isOpen}
				aria-controls="mobile-nav-menu"
				aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
			>
				<div className="flex flex-col items-center justify-center gap-1.5">
					<motion.span
						animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
						transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
						className="h-0.5 w-5 rounded-full bg-current"
					/>
					<motion.span
						animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
						transition={{ duration: 0.2 }}
						className="h-0.5 w-5 rounded-full bg-current"
					/>
					<motion.span
						animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
						transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
						className="h-0.5 w-5 rounded-full bg-current"
					/>
				</div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						id="mobile-nav-menu"
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: "auto",
							opacity: 1,
							transition: {
								height: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
								opacity: { duration: 0.3, delay: 0.05 },
							},
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: {
								height: { duration: 0.3, ease: [0.32, 0, 0.67, 0] },
								opacity: { duration: 0.25 },
							},
						}}
						className="absolute top-full left-0 right-0 z-40 lg:hidden"
					>
						<motion.div
							initial="closed"
							animate="open"
							exit="closed"
							variants={containerVariants}
							className="surface-panel mt-3 p-5 shadow-[0_24px_50px_rgba(15,23,42,0.16)]"
						>
							<div className="flex flex-col gap-1.5">
								{navLinks.map((link) => (
									<motion.div key={link.label} variants={itemVariants}>
										<Link
											href={link.href}
											onClick={() => setIsOpen(false)}
											className="block rounded-[16px] px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-brand-soft/50 hover:text-brand-dark"
										>
											{link.label}
										</Link>
									</motion.div>
								))}
								<motion.div variants={itemVariants} className="pt-3">
									<a
										href="https://forms.gle/WJBUZnyZUKkasZ9Z7"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => setIsOpen(false)}
										className="primary-button w-full justify-center py-4 text-base shadow-lg"
									>
										Daftar
									</a>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
