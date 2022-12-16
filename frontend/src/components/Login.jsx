import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = ({ isOpen, onClose, setChangeValue }) => {
	const initState = {
		email: "",
		password: "",
	};
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<form onSubmit={handleSubmit}>
					<ModalHeader>Login</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Button
							onClick={() => {
								setChangeValue(true);
							}}
						>
							Signup
						</Button>
						<Tabs isFitted variant="enclosed">
							<TabPanels>
								<TabPanel>
									<FormControl>
										<FormLabel>Email address</FormLabel>
										<Input
											type="email"
											name="email"
											value={form.email}
											onChange={handleInput}
										/>
									</FormControl>
									<FormControl>
										<FormLabel>Password</FormLabel>

										<InputGroup size="md">
											<Input
												pr="4.5rem"
												type={show ? "text" : "password"}
												placeholder="Enter password"
												value={form.password}
												name="password"
												onChange={handleInput}
											/>
											<InputRightElement width="4.5rem">
												<Button h="1.75rem" size="sm" onClick={handleClick}>
													{show ? "Hide" : "Show"}
												</Button>
											</InputRightElement>
										</InputGroup>
									</FormControl>
								</TabPanel>
							</TabPanels>
						</Tabs>
						<Flex justifyContent={"space-around"}>
							<Link>
								<Image src="https://img.shields.io/badge/Google-4285F4?style=for-the-badge&logo=google&logoColor=white" />
							</Link>
							<Link>
								<Image src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white" />
							</Link>
						</Flex>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" type="submit">
							Login
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};

export default Login;