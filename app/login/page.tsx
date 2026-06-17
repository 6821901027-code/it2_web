export default function Login () {
    return (
        <div className="auth-page">
          <form className="auth-card">
            <h1> เข้าสู่ระบบ </h1>
            <input placeholder="Email" type="email "/>
            <input placeholder="Password" type=" password"/>

            <button> login </button>

            
            </form>
        </div>
    );
}