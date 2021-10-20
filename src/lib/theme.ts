import { createTheme } from '@material-ui/core/styles';
import colors, { GREY } from 'constants/colors';

const borderRadius = 15;

export const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: colors.PRIMARY.MAIN,
			light: colors.PRIMARY.LIGHT,
			dark: colors.PRIMARY.DARK,
			contrastText: colors.PRIMARY.TEXT,
		},
		secondary: {
			main: colors.SECONDARY.MAIN,
			light: colors.SECONDARY.LIGHT,
			dark: colors.SECONDARY.DARK,
			contrastText: colors.SECONDARY.TEXT,
		},
	},
	typography: {
		fontFamily: 'sans-serif',
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: colors.WHITE,
				},
			},
		},
		MuiSelect: {
			select: {
				'&:focus': {
					borderRadius,
				},
				width: '160px',
			},
			iconOutlined: {
				color: colors.SECONDARY.MAIN,
			},
		},
		MuiTextField: {
			root: {
				borderRadius: '1rem',
				transition: '.2s',
				marginRight: '20px',
			},
		},
		MuiInputBase: {
			root: {
				'&:hover': {
					boxShadow: `0px 0px 16px ${colors.PRIMARY.MAIN}`,
				},
			},
		},
		MuiInputLabel: {
			shrink: {
				color: colors.SECONDARY.MAIN,
			},
		},
		MuiFormLabel: {
			asterisk: {
				color: colors.ERROR,
			},
			root: {
				'&$focused': {
					color: colors.SECONDARY.MAIN,
				},
			},
		},
		MuiFormControlLabel: {
			root: {
				color: colors.GREY_DARK,
			},
		},
		MuiOutlinedInput: {
			root: {
				color: colors.SECONDARY.MAIN,
				borderRadius,
				'&$focused': {
					borderRadius,
				},
				'&:hover:not($error) $notchedOutline': {
					borderColor: colors.PRIMARY.MAIN,
				},
			},
		},
		MuiTouchRipple: {
			child: {
				backgroundColor: colors.PRIMARY.MAIN,
			},
		},
		MuiSwitch: {
			root: {
				height: 50,
				width: 72,
			},
			switchBase: {
				padding: `15px 16px`,
			},
			colorPrimary: {
				'&$checked': {
					color: colors.WHITE,
				},
			},
			track: {
				borderRadius,
				background: colors.MAINS_GRADIANT,
			},
		},
		MuiFormHelperText: {
			root: {
				'&$error': {
					borderRadius,
					margin: `2.5px 5px`,
					padding: `5px 50px`,
					color: colors.ERROR,
					background: colors.ERROR_LIGHT,
					fontSize: '1rem',
					fontWeight: 500,
				},
			},
		},
		MuiButton: {
			contained: {
				background: colors.MAINS_GRADIANT,
				padding: '15px 40px',
				fontSize: '1.2rem',
				fontWeight: 'bold',
				textTransform: 'none',
				color: colors.WHITE,
			},
			root: {
				borderRadius,
			},
		},
		MuiStepIcon: {
			root: {
				'&$completed': {
					color: colors.PRIMARY.MAIN,
				},
				'&$active': {
					color: colors.SECONDARY.MAIN,
				},
			},
		},
		MuiDrawer: {
			paper: {
				zIndex: 1050,
			},
		},
		MuiSlider: {
			root: {
				paddingRight: '20px',
				height: 8,
			},
			track: {
				height: 8,
				borderRadius: 4,
			},
			thumb: {
				height: 24,
				width: 24,
				backgroundColor: '#fff',
				border: '2px solid currentColor',
				marginTop: -8,
				marginLeft: -12,
				'&:focus, &:hover, &$active': {
					boxShadow: 'inherit',
				},
			},
			valueLabel: {
				left: 'calc(-50% + 4px)',
			},
			rail: {
				height: 8,
				borderRadius: 4,
			},
		},
		MuiChip: {
			root: {
				color: colors.GREY_DARK,
				borderColor: colors.GREY_DARK,
			},
			colorPrimary: {
				color: colors.PRIMARY.MAIN,
				borderColor: colors.PRIMARY.MAIN,
			},
		},
	},
});
