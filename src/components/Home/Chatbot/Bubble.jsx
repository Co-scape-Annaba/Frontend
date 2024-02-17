export default function Bubble(props){
  return (
    
<div class="flex items-start gap-2.5 p-6 pt-10">
   <img class="w-8 h-8 rounded-full" src="/icons/avatar.svg" alt="Jese"/>
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-50 bg-gray-100 rounded-e-xl rounded-es-xl">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900">Bonnie Green</span>
         <span class="text-sm font-normal text-black">11:46</span>
      </div>
      <p class="text-sm font-normal py-2.5 text-gray-900 text-left">{props.message}.</p>
   </div>
</div>
  )
}