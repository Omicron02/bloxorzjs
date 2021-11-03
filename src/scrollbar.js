import styles from './scrollbar.module.css'
function Scroll(){
    
        let progress = document.getElementsByClassName("progressbar");
        let totalHeight =  document.body.scrollHeight - window.innerHeight;
        window.onscroll = function()
        {
            let progressHeight = (window.pageYOffset / totalHeight)*100;
            progress.style.height =  document.body.scrollHeight + "%"
        } 
        
return(
    <>
    <div className="progressbar"></div>
        <div className ="scrollpath"></div>
        
    </>
    )
}
export default Scroll