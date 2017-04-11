console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html (arr, name, comment) {
	name = name.replace(/&/g, "&amp;").replace(/"/g, "&quot;")
		.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;");
	comment = comment.replace(/&/g, "&amp;").replace(/"/g, "&quot;")
		.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;");
	return arr[0] + name + arr[1] + comment + arr[2];
}
