const errHandle = (error) => {
    const status = error.response.status;
    if (status === 404) {
        console.log("Invaid request");
    } else if (status === 401 || status === 403) {
        console.log("Unauthorized");
        alert('토큰이 만료되었습니다. 재로그인 바랍니다.')
        localStorage.removeItem('accessToken');
        window.location.href = "/home";
        // this.$router.push("/home");
    } else if (status === 400) {
        console.log("Invaild of missing information");
    } else if (status === 500) {
        const msg = "아이디 비밀번호가 일치하지 않습니다."
        return msg;
    } else {
        console.log(error.response.data.message);
    }
}
export default errHandle;