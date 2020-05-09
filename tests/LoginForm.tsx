import React from 'react';

export interface Props {
  shouldRemember: boolean;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onRememberChange: (remember: boolean) => void;
  onSubmit: (username: string, password: string, remember?: boolean) => void;
}

function LoginForm(props: Props): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { shouldRemember } = props;
  const [remember, setRemember] = React.useState(shouldRemember);

  const handleUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = e.target;
    setUsername(value);
    props.onUsernameChange(value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = e.target;
    setPassword(value);
    props.onPasswordChange(value);
  };

  const handleRememberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { checked } = e.target;
    setRemember(checked);
    props.onRememberChange(checked);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    props.onSubmit(username, password, remember);
  };

  return (
    <form data-testid="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          data-testid="username"
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>

      <label htmlFor="password">
        Password:
        <input
          data-testid="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>

      <label htmlFor="remember">
        <input
          data-testid="remember"
          name="remember"
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
        Remember me?
      </label>

      <button type="submit" data-testid="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
