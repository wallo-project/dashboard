

export default function Setup() {
    const labelClasses: string = "block m-2";
    const inputClasses: string = "block object-center mx-auto p-2 m-2 w-44 bg-gray-300 dark:bg-gray-600 rounded-xl"
    
    const setApiConfig = (e: any) => {
        e.preventDefault();
    }
    
    return (
        <>
            <div className="absolute text-center w-full mx-auto scroll-smooth z-40 p-5 duration-300 transition">
                <div className="object-center mx-auto w-min p-5 rounded-xl bg-white/30 dark:bg-black/30">
                    <h3 className="text-2xl font-semibold">API Setup</h3>
                    <form onSubmit={setApiConfig}>
                        <label className={labelClasses}>Local IP Address of the API</label>
                        <input type={"text"} className={inputClasses}  placeholder="127.0.0.1" />
                        <label className={labelClasses} >Port of the API</label>
                        <input type={"number"} className={inputClasses} placeholder="8080" />
                        <input type={"submit"} className={inputClasses + " bg-blue-300 hover:bg-blue-200 dark:bg-blue-700 dark:hover:bg-blue-600"} />
                    </form>
                </div>
            </div>
        </>
    )
}