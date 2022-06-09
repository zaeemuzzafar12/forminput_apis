import React from 'react'

const Data = ({data}) => {
  return (
    <>
    <div className='conatiner'>
      <div className='row'>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
          <div className='row'>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                  {
                      data &&
                      data.length > 0 &&
                      data.map((datas) => {
                        return(
                          <div key={datas?.id}>
                              <img  src={datas?.urls?.thumb} alt="loading" height={200} width={500} />
                          </div>
                        )
                      })
                  }
            </div>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6' style={{justifyContent:"space-between",display:"flex"}}>
                  {
                      data &&
                      data.length > 0 &&
                      data.map((datas) => {
                        return(
                          <div key={datas?.id}>
                              <img  src={datas?.urls?.thumb} alt="loading" height={200} width={500} />
                          </div>
                        )
                      })
                  }
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Data