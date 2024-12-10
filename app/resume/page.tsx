// pages/pdf-viewer.tsx
export default function PDFPage() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<iframe
				src="/resume.pdf"
				width="100%"
				height="100%"
				style={{ border: "none" }}
			></iframe>
		</div>
	);
}
