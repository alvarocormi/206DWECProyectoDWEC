var i = 0;
document.write('<table>')

for (let index = 0; index < 1000; index++) {
	document.write("<tr>");
	for (let j = 0; j <10; j++) {
		i++;
		document.write("<th>");
		document.write(i);
		document.write("</th>");
		document.write("<td>");
		document.write("&#"+i);
		document.write("</td>");

	}
	document.write("</tr>")

	}

document.write('</table>');
