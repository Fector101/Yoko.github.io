"use strict;"
document.querySelector('.specs').addEventListener('click',function(e){
    const parent_case=( e.target.closest('.header'))?.closest('.custom-details')
    if(parent_case){
        let details_text_box = parent_case.querySelector('.details')
        if(details_text_box.style.maxHeight){
            details_text_box.style.maxHeight=null
            details_text_box.style.padding='0'
            parent_case.querySelector('button').innerText='+'
        }
        else{
            details_text_box.style.maxHeight=details_text_box.scrollHeight+10 +'px'
            details_text_box.style.padding='10px 10px'
            parent_case.querySelector('button').innerText='-'

        }
    }
})