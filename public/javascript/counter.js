// counter
const counters = document.querySelectorAll('.counter');
counters.forEach(counter =>{
  const updateCount = () =>{
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      if(count < target && target=="11"){
          counter.innerText = count + 1;
          setTimeout(updateCount, 700);
      }else if(count < target && target=="1961"){
              counter.innerText = count + 1;  
              setTimeout(updateCount, 1);  
      }else if(count < target && target=="34"){
        counter.innerText = count + 1;  
        setTimeout(updateCount, 300);  
      }else{
        count.innerText = target;
      }
  }
  updateCount();
});