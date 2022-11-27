function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a className="underline" href='https://www.udemy.com/course/react-front-to-back-2022/'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>4.2.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white ml-1' href='https://twitter.com/briancordisco'>
          Brian Cordisco
        </a>
      </p>
    </div>
  )
}

export default About