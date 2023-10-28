const Banner = () => {
  return (
    <div>
      <div className='carousel w-full h-[600px]'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img src='https://i.ibb.co/HTrwCnV/benz-4.png' className='w-full' />

          <div className='absolute left-0 top-0 h-full flex items-center bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)] '>
            <div className='text-white   pl-12  space-y-7 w-1/2 '>
              <h2 className='text-6xl  font-bold'>
                Affordable Price For Servicing
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolorum autem, odit consequatur nulla tenetur ad
                aperiam laborum est facere blanditiis exercitationem deserunt .
              </p>
              <div className='flex gap-4'>
                <button className='btn btn-outline  btn-sm btn-primary'>
                  DISCOVER MORE
                </button>
                <button className='btn btn-outline  btn-sm btn-warning'>
                  LATEST PROJECT
                </button>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            
            <a href='#slide4' className='btn mr-4 btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img src='https://i.ibb.co/CKqksSf/BMW-4.png' className='w-full' />
          <div className='absolute left-0 top-0 h-full flex items-center bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)] '>
            <div className='text-white   pl-12  space-y-7 w-1/2 '>
              <h2 className='text-6xl  font-bold'>
                Affordable Price For Servicing
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolorum autem, odit consequatur nulla tenetur ad
                aperiam laborum est facere blanditiis exercitationem deserunt .
              </p>
              <div className='flex gap-4'>
                <button className='btn btn-outline  btn-sm btn-primary'>
                  DISCOVER MORE
                </button>
                <button className='btn btn-outline  btn-sm btn-warning'>
                  LATEST PROJECT
                </button>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            
            <a href='#slide1' className='btn mr-4 btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img src='https://i.ibb.co/RvdPxL7/Ford.jpg' className='w-full' />
          <div className='absolute left-0 top-0 h-full flex items-center bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)] '>
            <div className='text-white   pl-12  space-y-7 w-1/2 '>
              <h2 className='text-6xl  font-bold'>
                Affordable Price For Servicing
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolorum autem, odit consequatur nulla tenetur ad
                aperiam laborum est facere blanditiis exercitationem deserunt .
              </p>
              <div className='flex gap-4'>
                <button className='btn btn-outline  btn-sm btn-primary'>
                  DISCOVER MORE
                </button>
                <button className='btn btn-outline  btn-sm btn-warning'>
                  LATEST PROJECT
                </button>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            <a href='#slide2' className='btn mr-4 btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <img src='https://i.ibb.co/XSXsGgn/Mercedes.jpg' className='w-full' />
          <div className='absolute left-0 top-0 h-full flex items-center bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)] '>
            <div className='text-white   pl-12  space-y-7 w-1/2 '>
              <h2 className='text-6xl  font-bold'>
                Affordable Price For Servicing
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolorum autem, odit consequatur nulla tenetur ad
                aperiam laborum est facere blanditiis exercitationem deserunt .
              </p>
              <div className='flex gap-4'>
                <button className='btn btn-outline  btn-sm btn-primary'>
                  DISCOVER MORE
                </button>
                <button className='btn btn-outline  btn-sm btn-warning'>
                  LATEST PROJECT
                </button>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            <a href='#slide3' className='btn mr-4 btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
