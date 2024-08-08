function Jsx3()
{
	return(
        <>
           <h3>This is third example of jsx</h3>
           <section>{user.firstname}  {user.lastname}</section>
        </>
	);
}

const user = 
{
	firstname:"Head",
	lastname : "Office"
};
export default Jsx3