import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "../../hooks/formHooks";
import { useUserContext } from "mediastore/contextHooks";

const RegisterForm = () => {
  const { handleRegister } = useUserContext();

  const initValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
  };

  const doRegister = async () => {
    if (inputs.password !== inputs.confirm) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      username: inputs.username,
      email: inputs.email,
      password: inputs.password,
    };

    handleRegister(userData);
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doRegister,
    initValues
  );

  return (
    <form onSubmit={handleSubmit}>
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold">Register</h2>
      </CardHeader>
      <CardContent className="space-y-4 px-6 py-8">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            name="password" 
            type="password" 
            onChange={handleInputChange}
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">Confirm Password</Label>
          <Input 
            id="confirm" 
            name="confirm" 
            type="password" 
            onChange={handleInputChange}
            required 
          />
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <div className="w-full flex justify-center">
          <Button type="submit">Register</Button>
        </div>
      </CardFooter>
    </form>
  );
};

export default RegisterForm;
