import {useState,useMemo} from 'react';
function Hookusememo()
{
	const [add,setadd] = useState(0);
	const [sub,setsub] = useState(100);

	const abc = useMemo(
		   function multi()
	       {
		      console.log("multi() executed");
		      return add*10;
	       },[add]);

	
	return(
		<>
		   <button onClick={()=>setadd(add + 1)}>Addition</button>
		   {abc}
		   <div>{add}</div>
		   <button onClick={()=>setsub(sub - 1)}>Substraction</button>
		   <div>{sub}</div>
		</>
	);
}
export default Hookusememo
