const colors = [
    {hex:"#FA54D5", rgb:"250,84,213"},   
    {hex:"#D8D245", rgb:"216,210,69"}, 
    {hex:"#E82929", rgb:"232,41,41"}, 
    {hex:"#0FA6B0", rgb:"15,166,176"}, 
    {hex:"#1641EC", rgb:"22,65,236"}, 
    {hex:"#B31FE7", rgb:"179,31,231"}, 
    {hex:"#E47814", rgb:"228,120,20"}, 
    {hex:"#821212", rgb:"130,18,18"}, 
    {hex:"#2D845A", rgb:"45,132,90"}, 
   ]
   const paleteContainer = document.querySelector('.container-palete')

   const cardColors = createColorCards(colors);

   paleteContainer.insertAdjacentHTML('beforeend', cardColors);

   paleteContainer.addEventListener('click', onClickPaleteColor)
   
   function createColorCards(colors) {
       return colors.map(({hex, rgb}) =>{  // зробили деструктуризацію обєкта color
           return `
           <div class="color-card"> 
           <div class="color-swatch"
           data-hex="${hex}"
           data-rgb="${rgb}"
           style="background-color: ${hex}"
           ></div>
           <div class="color-meta">
             <p>HEX:${hex}</p>
             <p> RGB:${rgb}</p>
           </div>
         </div>`                               
       }).join('');
   }
   function onClickPaleteColor(evt) {
    const isColorSwatchEl = evt.target.classList.contains("color-swatch");  // перевірка цільового елемента з класом "color-swatch"
    if (!isColorSwatchEl) {                                                //перевіряємо чи клікнули саме по цьому елементі
      return;  
    }
    
    const swatch = evt.target;
    const parentCardColor = swatch.closest('.color-card')  // closest метод який шукає  і вибирає найближчий елемент з класом .color-card (батьківський або предок догори)
    parentCardColor.classList.add('color-swatch--is-active');
    paleteContainer.style.backgroundColor= swatch.dataset.hex;
    console.log(evt.target.dataset.hex); 
}