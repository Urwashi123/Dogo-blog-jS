function Jsx4()
{
	const age = "12";

	if(age>=18)
	{
         return(
         	<>
         	   <span>I am eligiable</span>
         	   <p>{age}</p>
         	</>
         );
	}
	else
	{
		return <span>Not eligiable</span>;
	}
}
export default Jsx4