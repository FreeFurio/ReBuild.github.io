import React, { useState } from 'react';
import { 
    Box, Container, Typography, Grid, Link, Card, CardContent, 
    TextField, Button, Checkbox, FormControlLabel, Select, 
    MenuItem, FormControl, InputLabel, Switch, Radio, 
    RadioGroup, Chip, Avatar, Divider, Alert, Badge, 
    IconButton, Tooltip, Slider, Rating, Accordion, 
    AccordionSummary, AccordionDetails, Tab, Tabs,
    LinearProgress, CircularProgress, Snackbar, Dialog,
    DialogTitle, DialogContent, DialogActions, Drawer,
    List, ListItem, ListItemText, ListItemIcon, AppBar,
    Toolbar, Menu, Fab, SpeedDial, SpeedDialAction,
    Stepper, Step, StepLabel, Breadcrumbs, Paper,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material'

function CustomTabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    );
}

export function MaterialUI() {
    const [tabValue, setTabValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [speedDialOpen, setSpeedDialOpen] = useState(false);
    const [selectValue, setSelectValue] = useState('');

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
            <Container maxWidth="lg">
                <AppBar position="static" sx={{ mb: 2 }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Material UI Showcase
                        </Typography>
                        <Button color="inherit" onClick={() => setDrawerOpen(true)}>
                            Open Drawer
                        </Button>
                    </Toolbar>
                </AppBar>

                <Card>
                    <CardContent>
                        <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
                            Complete Material UI Components
                        </Typography>
                        
                        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 2 }}>
                            <Tab label="Basic Components" />
                            <Tab label="Forms & Inputs" />
                            <Tab label="Layout & Navigation" />
                            <Tab label="Data Display" />
                        </Tabs>

                        <CustomTabPanel value={tabValue} index={0}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h5" gutterBottom>Alerts</Typography>
                                <Alert severity="success" sx={{ mb: 1 }}>Success alert</Alert>
                                <Alert severity="warning" sx={{ mb: 1 }}>Warning alert</Alert>
                                <Alert severity="error" sx={{ mb: 1 }}>Error alert</Alert>
                            </Box>

                            <Divider sx={{ my: 2 }}>
                                <Chip label="DIVIDER" />
                            </Divider>
                            
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" gutterBottom>Chips</Typography>
                                <Chip label="Default" sx={{ mr: 1 }} />
                                <Chip label="Primary" color="primary" sx={{ mr: 1 }} />
                                <Chip label="Secondary" color="secondary" sx={{ mr: 1 }} />
                            </Box>
                            
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" gutterBottom>Avatars & Badges</Typography>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    <Avatar>A</Avatar>
                                    <Avatar sx={{ bgcolor: 'primary.main' }}>B</Avatar>
                                    <Badge badgeContent={99} color="error">
                                        <Avatar>C</Avatar>
                                    </Badge>
                                </Box>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" gutterBottom>Buttons</Typography>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    <Button variant="contained">Contained</Button>
                                    <Button variant="outlined">Outlined</Button>
                                    <Button variant="text">Text</Button>
                                    <Button variant="contained" color="secondary">Secondary</Button>
                                </Box>
                            </Box>
                        </CustomTabPanel>

                        <CustomTabPanel value={tabValue} index={1}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h5" gutterBottom>Text Fields</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <TextField fullWidth label="Standard" variant="standard" />
                                    <TextField fullWidth label="Outlined" variant="outlined" />
                                    <TextField fullWidth label="Filled" variant="filled" />
                                    <FormControl fullWidth>
                                        <InputLabel>Select</InputLabel>
                                        <Select 
                                            label="Select" 
                                            value={selectValue} 
                                            onChange={(e) => setSelectValue(e.target.value)}
                                        >
                                            <MenuItem value={1}>Option 1</MenuItem>
                                            <MenuItem value={2}>Option 2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>Rating & Slider</Typography>
                                <Rating value={3.5} precision={0.5} />
                                <Slider defaultValue={50} sx={{ mt: 2 }} />
                            </Box>
                            
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>Switches & Checkboxes</Typography>
                                <FormControlLabel control={<Switch defaultChecked />} label="Switch On" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
                            </Box>
                        </CustomTabPanel>

                        <CustomTabPanel value={tabValue} index={2}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>Stepper</Typography>
                                <Stepper activeStep={1}>
                                    <Step><StepLabel>Step 1</StepLabel></Step>
                                    <Step><StepLabel>Step 2</StepLabel></Step>
                                    <Step><StepLabel>Step 3</StepLabel></Step>
                                </Stepper>
                            </Box>
                            
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>Breadcrumbs</Typography>
                                <Breadcrumbs>
                                    <Link underline="hover" color="inherit">Home</Link>
                                    <Link underline="hover" color="inherit">Components</Link>
                                    <Typography color="text.primary">Current</Typography>
                                </Breadcrumbs>
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>Accordion</Typography>
                                <Accordion>
                                    <AccordionSummary expandIcon="⬇️">
                                        <Typography>Expandable Section</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>This content is hidden by default.</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </CustomTabPanel>

                        <CustomTabPanel value={tabValue} index={3}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>Progress Indicators</Typography>
                                <LinearProgress sx={{ mb: 1 }} />
                                <LinearProgress variant="determinate" value={75} sx={{ mb: 2 }} />
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <CircularProgress />
                                    <CircularProgress variant="determinate" value={60} />
                                </Box>
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>List Component</Typography>
                                <Paper sx={{ maxWidth: 400 }}>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>📋</ListItemIcon>
                                            <ListItemText primary="List Item 1" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>📝</ListItemIcon>
                                            <ListItemText primary="List Item 2" />
                                        </ListItem>
                                    </List>
                                </Paper>
                            </Box>
                            
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>Table</Typography>
                                <TableContainer component={Paper}>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Component 1</TableCell>
                                                <TableCell>Button</TableCell>
                                                <TableCell>Active</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </CustomTabPanel>
                        
                        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <Button variant="outlined" onClick={() => setOpen(true)}>
                                Open Dialog
                            </Button>
                            <Button variant="outlined" onClick={() => setSnackbarOpen(true)}>
                                Show Snackbar
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
                
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Sample Dialog</DialogTitle>
                    <DialogContent>
                        <Typography>This is a dialog component example.</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={() => setOpen(false)} variant="contained">OK</Button>
                    </DialogActions>
                </Dialog>

                <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <Box sx={{ width: 250, p: 2 }}>
                        <Typography variant="h6" gutterBottom>Drawer Content</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>🏠</ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>👤</ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>

                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={() => setSnackbarOpen(false)}
                    message="This is a snackbar notification!"
                />
            </Container>
        </Box>
    )
}