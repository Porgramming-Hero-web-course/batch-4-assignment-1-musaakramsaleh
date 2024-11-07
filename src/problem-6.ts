{
    interface Profile{
        name: string;
        age: number;
        email: string;
    }
    const updateProfile = (obj:Profile,updates:Partial<Profile>):Profile =>{
        const w:Profile = {...obj,...updates}
        return w 
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}