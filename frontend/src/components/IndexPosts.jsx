import React from 'react'

const IndexPosts = () => {
  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
      <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="ポケモン名を入力"
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>


      </div>


      
      <div className="md:flex">
        <div className="card w-96 bg-base-100 shadow-xl mx-5 mb-10">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-5 mb-10">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPosts