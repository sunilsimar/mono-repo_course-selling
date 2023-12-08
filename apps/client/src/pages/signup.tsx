import { Signup } from "@repo/ui";

export default function SignupPage() {
  return (
    <div>
      <Signup
        onClick={async (username, password) => {
          // const response = await axios.post("",{
          //     username,
          //     password
          // })
        }}
      />
    </div>
  );
}
