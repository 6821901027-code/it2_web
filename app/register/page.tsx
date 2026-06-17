export default function Register () {
    return (
        <div className="auth-page">
          <form className="auth-card">
            <h1> สมัครสมาชิก </h1>
            <input placeholder="ชื่อ นามสกุล"/>
            <input placeholder="Email" />
            <input placeholder="Password" />

            <button> ตกลง </button>

            </form>
        </div>
    );
}