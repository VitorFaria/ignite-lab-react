import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner';

export function Loading() {
  return (
    <div className="flex-1">
      <span className="flex flex-col items-center justify-center h-[calc(100%-60px)]">
        <Oval 
          color="#00BFFF" 
          height={80} 
          width={80} 
          ariaLabel='loading'
        />
      </span>
    </div>
  )
}