import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BookletCardProps {
	title: string;
	label: string;
	description: string;
	link: string;
	accentColor: string;
	coverImage: string;
}

const textColors: Record<string, string> = {
	"#2EC4A0": "text-[#2EC4A0]",
	"#2EA0C4": "text-[#2EA0C4]",
};

const bgColors: Record<string, string> = {
	"#2EC4A0": "bg-[#2EC4A0]",
	"#2EA0C4": "bg-[#2EA0C4]",
};

export function BookletCard({
	title,
	label,
	description,
	link,
	accentColor,
	coverImage,
}: BookletCardProps) {
	const textCls = textColors[accentColor] || "text-brand-primary";
	const bgCls = bgColors[accentColor] || "bg-brand-primary";

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative flex w-full max-w-[340px] flex-col overflow-hidden rounded-[20px] bg-white text-left shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
		>
			{/* Cover Image */}
			<div className="relative w-full shrink-0 overflow-hidden bg-slate-900 pb-[110%]">
				<Image
					src={coverImage}
					alt={`Cover Booklet ${title}`}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="340px"
				/>
				{/* Accent Overlay */}
				<div
					className={`absolute inset-0 opacity-20 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-40 ${bgCls}`}
				/>
			</div>

			{/* Content */}
			<div className="flex flex-col gap-3 p-5">
				<span className={`text-[10px] font-bold uppercase tracking-widest ${textCls}`}>
					{label}
				</span>
				<h3 className="text-xl font-bold leading-tight text-slate-900">
					{title}
				</h3>
				<p className="text-sm leading-relaxed text-slate-500">{description}</p>
				<div
					className={`mt-2 inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${textCls}`}
				>
					Baca Booklet
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</div>
			</div>
		</a>
	);
}
