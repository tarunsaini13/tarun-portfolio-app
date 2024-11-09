import { useState } from "react";

function Navbar({scrollToProject,scrollToHome,scrollToSkill}){
    const [activeHeader,setActiveHeader] = useState('home');
    const onHeaderClick = (tab)=>{
        console.log("running on header click")
        setActiveHeader(tab);
        if(tab === 'exp'){
            scrollToProject();
        }else if(tab === 'skill'){
            scrollToSkill();
        }else{
            scrollToHome();
        }
    }
    return (
        <>
            <div className="navbarWrapper">
                <div className={`title ${activeHeader === 'home' ? 'active' : ''}`} onClick={()=>onHeaderClick('home')}>
                    <span>
                        /
                    </span>
                </div>
                <div className={`title ${activeHeader === 'skill' ? 'active' : ''}`}  onClick={()=>onHeaderClick('skill')}>
                    <span>
                        skill
                    </span>
                </div>
                <div className={`title ${activeHeader === 'exp' ? 'active' : ''}`} onClick={()=>onHeaderClick('exp')}>
                    <span>
                        Work
                    </span>
                </div>
            </div>
            {/* <div className="cv-wrapper">
                CV
            </div> */}
        </>
    )
}
export default Navbar;