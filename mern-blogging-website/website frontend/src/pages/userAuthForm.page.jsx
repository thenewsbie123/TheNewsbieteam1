const UserAuthForm = ({ type }) => {
    return (
        <section className="h-cover flex items-center justify-center">
            <form className="w-[80%] max-w-[400px]">

                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type === "sign-in" ? "welcome back" : "join us today"}
                </h1>

                {
                type !== "sign-in" ? 
                <InputBox
                  name="fullname"
                  type="text"
                  placeholder="full name"/>
                : "" 
                }
                <InputBox
                  name="email"
                  type="email"
                  placeholder="eamil"/>

            </form>
        </section>
    )
}

export default UserAuthForm;
