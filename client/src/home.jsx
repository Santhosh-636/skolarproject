import React from 'react'
function Home() {
    return (
    <div className="conntainer">
        <div className="nav">
            <div className='logo'><img src='https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg' alt='logo'></img></div>
            <div className='cont'><img src='https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png' alt='logo'></img></div>
            <div><input className="inp" type="search" placeholder='What are You looking For' /></div>
            <div className='Track'>Track Order</div>
            <div className='whit'>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#WishListNew_svg__a)"><path clip-rule="evenodd" d="M11.993 5.136c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.635 2.105 6.585 6.544 8.207 7.98.182.162.272.242.378.274a.504.504 0 0 0 .286 0c.106-.032.197-.112.378-.273 1.623-1.437 6.573-5.876 8.208-7.98 1.967-2.532 1.658-6.133-.89-8.251-2.549-2.118-5.84-1.512-7.839.826Z" stroke="#333368" stroke-width="1.5" stroke-linejoin="round"></path></g><defs><clipPath id="WishListNew_svg__a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                Whitelist
            </div>
            <div className='cart'>
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 9V6a4 4 0 0 0-8 0v3m-4.408 1.352-.6 6.4c-.17 1.82-.256 2.73.046 3.432a3 3 0 0 0 1.32 1.45C5.03 22 5.944 22 7.771 22h8.458c1.828 0 2.742 0 3.413-.366a3 3 0 0 0 1.32-1.45c.302-.703.217-1.612.046-3.432l-.6-6.4c-.144-1.537-.216-2.305-.561-2.886a3 3 0 0 0-1.292-1.176C17.945 6 17.173 6 15.629 6H8.371c-1.543 0-2.315 0-2.925.29a3 3 0 0 0-1.292 1.176c-.346.581-.418 1.35-.562 2.886Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path></svg>
                Cart</div>
        </div>
    </div>
    )
}
export default Home;