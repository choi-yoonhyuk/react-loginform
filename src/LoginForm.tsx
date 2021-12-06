import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  username: string;
  password: string;
  password1: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onValid = (data: IForm) => {
    console.log(data);
    if (data.password !== data.password1) {
      setError(
        "password1",
        {
          message: "비밀번호가 일치하지 않습니다.",
        },
        { shouldFocus: true }
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "이메일 형식으로 입력해주세요",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("username", {
            required: "이름을 입력해주세요",
            minLength: {
              value: 3,
              message: "이름은 3글자 이상이어야 합니다.",
            },
            validate: (value) =>
              value.includes(" ") ? "공백을 포함할 수 없습니다." : true,
          })}
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 5,
              message: "비밀번호는 5글자 이상이어야 합니다.",
            },
          })}
        />
         <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 5,
              message: "비밀번호는 5글자 이상이어야 합니다.",
            },
          })}
        />
         <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default LoginForm;
