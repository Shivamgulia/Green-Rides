import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import AddStudentForm from '../components/auth/AddStudentForm';

const Signup = () => {
  const [initialSignup, setInitialSignup] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '622560773772-iifqp88cithvc1osdp9d03126cvv0d9s.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signupDiv'), {
      theme: 'outline',
      size: 'large',
    });
  });
  const handleCallbackResponse = (response) => {
    var userObject = jwt_decode(response.credential);
    // document.getElementById('signupDiv').hidden = true;
    // console.log(userObject);

    if (userObject.email.includes('@hbtu.ac.in')) {
      setUser(userObject);
      // console.log(user);

      setInitialSignup(true);
    } else {
      alert('Not a HBTU Id');
      throw Error('Not a HBTU Id');
    }
  };

  return (
    <div>
      {!initialSignup && (
        <div className="centered">
          <div id="signupDiv"></div>
        </div>
      )}
      {initialSignup && (
        <div>
          <AddStudentForm user={user} />
        </div>
      )}
    </div>
  );
};

export default Signup;
