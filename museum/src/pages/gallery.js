// Associated with the /gallery route
import React, { useEffect } from 'react';
import Shred from '@/components/Shred';
import Confetti from '@/components/Confetti';
import Shred2 from '@/components/Shred2';

function about(){
  return <div className='mt: 50'>
     
      <Shred />
      <Confetti />
      <Shred2 />    
  </div>
  
}

export default about;