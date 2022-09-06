export default function decorate(block) {
  
  //debugger;
 
  [...block.children].forEach((row, i) => {
	  if(i===0) row.className = `introduction-title`;
	  if(i===1){
		 row.className = `introduction-content`;
		[...row.children].forEach((col, x)=>{
			if(x===0) col.className = 'introduction-content-left';
			if(x===1)  col.className = 'introduction-content-right';
		});
	  }
  });
}