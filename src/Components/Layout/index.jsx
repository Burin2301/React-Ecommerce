/* eslint-disable react/prop-types */

function Layout ({children}){
    return(
        <div className="flex  flex-col mt-20 items-center justify-center">
            {children}
        </div>
    )
}

export default Layout