<<<<<<< HEAD
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoveToTop = () => {
    const path=useLocation();

    useEffect(()=>{
    window.scrollTo(0,0)
    }, [path]);
}

=======
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoveToTop = () => {
    const path=useLocation();

    useEffect(()=>{
    window.scrollTo(0,0)
    }, [path]);
}

>>>>>>> a39f6d19bacd9e8af6ec4d53020089e193297da5
export default MoveToTop;