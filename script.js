let count = 0 ;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
btns.forEach(function (btn) //Wykonuje dostarczoną funkcję w tym przypadku funkje jeden raz na każdy element tablicy.
{
btn.addEventListener("click",function(e)
{
  const styles = e.currentTarget.classList; //tworzy zmienna style która przechowuje który przycisk został kliknięty
  if(styles.contains("decrease"))     // jeżeli zawiera obniż
  {
      count--;
  }
  else if(styles.contains('incrase'))
  {
      count++;
  }
  else
  {
      count=0;
  }
  if(count>0)
  {
      value.style.color = "green";
  }
  if(count<0)
  {
      value.style.color = "red";
  }
  if(count===0)
  {
      value.style.color = "black";
  }
  value.textContent=count;  // Pobiera lub ustawia zawartość tekstową węzła i jego potomków.
})
});
