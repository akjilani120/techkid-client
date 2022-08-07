import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
           style={{ textDecoration: match ? "none" : "none" , color: match ? "white" : " black" , backgroundColor : match ? "rgb(248, 9, 89)" : "transparent" , display: match && "block" , padding:"10px" , borderRadius:"15px", fontSize:"20px" }}
          to={to}
          
        >
          {children}
        </Link>
       
      </div>
    );
  }
  export default CustomLink