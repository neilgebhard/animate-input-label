const Input = ({ label, type }) => {
  return (
    <div className='relative'>
      <input
        className='border-b-2 border-slate-700 outline-none text-xl'
        type={type}
        required
      />
      <label className='absolute left-0 pointer-events-none text-slate-700'>
        {label.split('').map((char, idx) => (
          <span
            className='inline-block transition'
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            {char}
          </span>
        ))}
      </label>
    </div>
  )
}

function App() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div>
        <div className='mb-8'>
          <Input label='Username' type='text' />
        </div>
        <div className='mb-8'>
          <Input label='Password' type='password' />
        </div>
      </div>
    </main>
  )
}

export default App
