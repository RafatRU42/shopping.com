import React from 'react';
import image1 from '../../images/image-1.jpg'

const Login = () => {
	return (
		<div className='flex h-full w-full m-6'>
			<div className='w-2/3 h-full'>
				<img src={image1} alt="" />
			</div>

			<div className='w-1/3 mr-20 mt-20'>
				<div className="flex flex-col max-w-md rounded-md sm:p-10 shadow-md">
					<div className="mb-8 text-center">
						<h1 className="my-3 text-4xl font-bold">Sign in</h1>
						<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
					</div>
					<form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
						<div className="space-y-4">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
								<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md " />
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<label htmlFor="password" className="text-sm">Password</label>
									<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
								</div>
								<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
							</div>
						</div>
						<div className="space-y-2">
							<div>
								<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-green dark:text-gray-900">Sign in</button>
							</div>
							<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
								<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-green">Sign up</a>.
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;