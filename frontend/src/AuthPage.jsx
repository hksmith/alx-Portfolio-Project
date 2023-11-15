import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
## creating an account for the users by just accepting their name
      const { value } = e.target[0];
      axios.post(
        'https://chathub-m1ax.onrender.com/auth', 
        {username: value}
        )
      .then(r => props.onAuth({ ...r.data, secret: value}))
      .catch(e => console.log('error', e))
    };
  
    return (
## the front page
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;
