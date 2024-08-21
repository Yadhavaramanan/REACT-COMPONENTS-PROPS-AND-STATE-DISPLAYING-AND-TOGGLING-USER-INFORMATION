import React ,{useState} from 'react';
function UserInfo({name,email,address})
{
    const[showDetails,setShowDetails]=useState(false);
    const toggleDetails=()=>{
        setShowDetails(!showDetails);
    };
    return(<div className="user-info">
        <h2>{name}</h2>
        <button onClick={toggleDetails}>
            {showDetails ? 'Hide Details':'Show Details'}
        </button>
        {showDetails&&(
            <div className="user-info">
                <p><strong>Email:</strong>{email}</p>
                <p><strong>Address:</strong>{address}</p>
            </div>
        )}
    </div>);
}
export default UserInfo;