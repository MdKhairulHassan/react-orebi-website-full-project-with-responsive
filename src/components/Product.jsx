import React from 'react'
import Badge from './Badge'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Flex from './Flex';
import Heading from './Heading';
import { FaCodeCompare } from "react-icons/fa6";
import Image from './Image';
import Paragraph from './Paragraph';
import { Link } from 'react-router-dom';

const Product = ({badge, imgSrc, para, para2, para3, para4, para5, para6}) => {
  return (
    <>
      <Link to={'/productdetails'}>
      <Image imgSrc={imgSrc} className={'w-full'} />
      <Badge text={badge} className={'absolute top-5 left-5'} />
      </Link>
      <div className='bg-white p-5 invisible group-hover:visible absolute w-full top-[45%] left-0'>
        <Flex className={'justify-end gap-x-3 items-center pb-2'}>
          <Paragraph text={para}/> <FaHeart/>
        </Flex>
        <Flex className={'justify-end gap-x-3 items-center pb-2'}>
          <Paragraph text={para2}/> <FaCodeCompare/>
        </Flex>

        <Link to={"/cart"}>
        <Flex className={'justify-end gap-x-3 items-center'}>
          <Paragraph text={para3}/> <FaShoppingCart/>
        </Flex>
        </Link>
        
      </div>
      <Link to={'/productdetails'}>
       <Flex className={'justify-between items-center mt-[30px]'}>
         <Heading as={'h5'} text={para4} className={'font-dms font-bold text-xl text-TextHColor'} />
         <Heading as={'h6'} text={para5} className={'font-dms text-[16px] text-TextColor'} />
       </Flex>
       <Heading as={'h6'} text={para6} className={'font-dms text-[16px] text-TextColor mt-[20px]'} />
      </Link>
    </>
  )
}

export default Product