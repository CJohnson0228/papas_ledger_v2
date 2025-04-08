import { Outlet } from 'react-router'

function AccountsLayout() {
  return (
    <div className='p-2'>
      <Outlet />
    </div>
  )
}

export default AccountsLayout
