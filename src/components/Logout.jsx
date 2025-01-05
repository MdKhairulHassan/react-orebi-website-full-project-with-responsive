import React from 'react'
import Text from './Text'

const Logout = () => {
  return (
    <div className={'w-2/3 py-[120px] mt-[210px] mobile:mt-[-150px] mobile:text-center mobile:w-full'}>
        <div>
          <Text className={"font-dms text-[56px] text-TexthColor"} text={"This is Logout Menu"} />
        </div>
      </div>
  )
}

export default Logout