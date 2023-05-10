// Associated with the / route
import React, { useEffect } from 'react';

import Toolbar from '@/components/Toolbar';
import Upload from '@/components/Upload';


function index(){
  return <div class="flex flex-row">
    <Toolbar />
    <Upload />
  </div>;
}

export default index;