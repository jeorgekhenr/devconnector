import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	root: {
		flexGrow: 1
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	paper: {
		marginTop: theme.spacing(8),

		display: 'flex',
		flexDirection: 'column'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	}
}));

const Register = () => {
	const classes = useStyles();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		cpassword: '',
		showPassword: false
	});

	const { name, email, password, cpassword, showPassword } = formData;

	const handleClickShowPassword = () => {
		setFormData({ ...formData, showPassword: !formData.showPassword });
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	const onChange = prop => e => {
		setFormData({ ...formData, [prop]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		if (password !== cpassword) {
			console.log('Passwords don`t match ');
		} else {
			console.log(formData);
		}
	};

	return (
		<Fragment>
			<CssBaseline />
			<div className={classes.paper}>
				<Container maxWidth='sm'>
					<div style={{ display: 'block' }}>
						<Typography component='h1' variant='h5' color='textPrimary'>
							Register
						</Typography>
						<Typography component='p' style={{ display: 'flex' }}>
							<Icon fontSize='small'>person</Icon>
							<Typography component='span' variant='body1'>
								Create your account
							</Typography>
						</Typography>
					</div>

					<form className={classes.form} onSubmit={e => onSubmit(e)}>
						<TextField
							required
							id='name-input'
							label='Name'
							className={classes.textField}
							fullWidth
							onChange={onChange('name')}
							margin='dense'
							value={name}
						/>

						<FormControl
							className={clsx(classes.margin, classes.textField)}
							fullWidth
							required
							margin='dense'
						>
							<InputLabel htmlFor='email-input'>Email</InputLabel>
							<Input
								id='email-input'
								type='email'
								onChange={onChange('email')}
								value={email}
							/>
							<FormHelperText id='email-input-helper'>
								This site uses Gravatar so if you want a profile image, use a
								gravatar email
							</FormHelperText>
						</FormControl>

						<FormControl
							className={clsx(classes.margin, classes.textField)}
							fullWidth
							required
							margin='dense'
						>
							<InputLabel htmlFor='password-input'>Password</InputLabel>
							<Input
								id='password-input'
								type={showPassword ? 'text' : 'password'}
								onChange={onChange('password')}
								value={password}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
							/>
							<FormHelperText id='passwords-input-helper'>
								Passwords must match
							</FormHelperText>
						</FormControl>

						<FormControl
							className={clsx(classes.margin, classes.textField)}
							fullWidth
							required
							margin='dense'
						>
							<InputLabel htmlFor='cpassword-input'>
								Confirm Password
							</InputLabel>
							<Input
								id='cpassword-input'
								type={showPassword ? 'text' : 'password'}
								onChange={onChange('cpassword')}
								value={cpassword}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<Button variant='contained' color='primary' type='submit'>
							Register
						</Button>
					</form>
					<Typography component='p' variant='subtitle1'>
						Already have an account? <Link to='/login'>Login</Link>
					</Typography>
				</Container>
			</div>
		</Fragment>
	);
};

export default Register;
