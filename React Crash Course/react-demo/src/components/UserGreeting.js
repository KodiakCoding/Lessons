export const UserGreeting = () => {
    const isLoggedIn = false;
    console.log("UserGreeting rendered");
    return (
        <div>
            Welcome {isLoggedIn ? "child" : "Guest"}
        </div>
    );
};
