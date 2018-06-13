const errHandle = (error) => {
    let status
    if (error.response && error.response.status) {
        this.status = error.response.status;
    }
    if (this.status === 404) {
        console.log("Invaid request");
    } else if (this.status === 401 || this.status === 403) {
        console.log("Unauthorized");
        alert('토큰이 만료되었습니다. 재로그인 바랍니다.')
        localStorage.removeItem('accessToken');
        window.location.href = "/home";
        // this.$router.push("/home");
    } else if (this.status === 400) {
        console.log("Invaild of missing information");
        window.location.href = "/home"
    } else if (this.status === 500) {
        console.log('500 error')
        const msg = "아이디 비밀번호가 일치하지 않습니다."
        return msg;
    } else {
        // console.log(error.response.data.message);
        // window.location.href = "/err"
    }
}
export default errHandle;