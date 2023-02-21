import { GoogleLogin } from '@react-oauth/google';

const GoogleAuthButton = () => {
  const handleLoginSuccess = (response) => {
    // Googleログイン成功時の処理
  }

  const handleLoginFailure = (error) => {
    // Googleログイン失敗時の処理
  }

  return (
    <>
    <div>googleログインボタン</div>
    </>
  );
};

export default GoogleAuthButton
