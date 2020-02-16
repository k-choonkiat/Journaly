import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';

const styles = {
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
};

const YourDialog = ({ classes }) => (
    <Dialog classes={{ paper: classes.dialogPaper }}>
        <div>dialogishness</div>
    </Dialog>
);

export default withStyles(styles)(YourDialog);