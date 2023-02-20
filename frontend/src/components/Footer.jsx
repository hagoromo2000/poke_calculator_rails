import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer pb-4 bg-base-100 text-base-content fixed bottom-0">
        <div className="w-full">
          <div className="w-full bg-gradient-to-r from-blue-200 to-red-200" >
            <p className='ml-10'>計算結果</p>
          </div>
          <div className=" w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mx-4">
            <div className="bg-blue-600 text-xs font-medium text-blue-100  text-center p-0.5 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
          </div>
          <div className='w-full'>
            <p className='flex justify-end mr-10'>48 ~ 57 (25.6 ~ 30.4%) 確定4発</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer