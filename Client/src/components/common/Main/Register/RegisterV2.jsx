import React, { useState } from 'react';
import { 
    Box, Typography, Button, Input, Textarea, Select, Option,
    Card, CardContent, CardOverflow, CardActions, Checkbox, Switch, Radio, RadioGroup,
    Chip, Avatar, Divider, Alert, Badge, Tooltip, Slider,
    List, ListItem, ListItemButton, ListItemContent, ListItemDecorator,
    Drawer, Modal, ModalDialog, ModalClose, Snackbar,
    Tabs, TabList, Tab, TabPanel, Breadcrumbs, Link,
    Menu, MenuItem, Dropdown, MenuButton, FormControl, FormLabel, FormHelperText,
    Accordion, AccordionDetails, AccordionSummary, AccordionGroup,
    AspectRatio, Autocomplete, CircularProgress, LinearProgress,
    Grid, IconButton, Sheet, Skeleton, Stack,
    ToggleButtonGroup, CssVarsProvider, CssBaseline, useColorScheme
} from '@mui/joy'

export function Register() {
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [toggleValue, setToggleValue] = useState('option1');
    const [autocompleteValue, setAutocompleteValue] = useState(null);

    const autocompleteOptions = [
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angular', value: 'angular' }
    ];

    return (
        <CssVarsProvider>
            <CssBaseline />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', p: 2 }}>
                <Box sx={{ maxWidth: 'lg', width: '100%' }}>
                    <Sheet variant="outlined" sx={{ p: 3, borderRadius: 'md' }}>
                        <Typography level="h1" textAlign="center" fontWeight="bold" sx={{ mb: 3 }}>
                            Joy UI Components Showcase
                        </Typography>
                        
                        {/* Tabs */}
                        <Tabs defaultValue={0} sx={{ mb: 3 }}>
                            <TabList>
                                <Tab>Basic Components</Tab>
                                <Tab>Forms & Inputs</Tab>
                                <Tab>Layout</Tab>
                            </TabList>
                            <TabPanel value={0}>
                                <Typography level="h3" sx={{ mb: 2 }}>Basic Components</Typography>
                                
                                {/* Alert Variants */}
                                <Stack spacing={1} sx={{ mb: 3 }}>
                                    <Alert color="primary">Primary alert</Alert>
                                    <Alert color="success">Success alert</Alert>
                                    <Alert color="warning">Warning alert</Alert>
                                    <Alert color="danger">Danger alert</Alert>
                                </Stack>

                                {/* Divider */}
                                <Divider sx={{ my: 2 }}>
                                    <Chip variant="outlined" color="primary">DIVIDER</Chip>
                                </Divider>
                                
                                {/* Chips */}
                                <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap' }}>
                                    <Chip>Default</Chip>
                                    <Chip color="primary">Primary</Chip>
                                    <Chip color="success">Success</Chip>
                                    <Chip variant="outlined">Outlined</Chip>
                                    <Chip variant="soft">Soft</Chip>
                                </Stack>
                                
                                {/* Avatars & Badges */}
                                <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: 'center' }}>
                                    <Avatar>A</Avatar>
                                    <Avatar color="primary">B</Avatar>
                                    <Badge badgeContent={99} color="danger">
                                        <Avatar>C</Avatar>
                                    </Badge>
                                    <Badge variant="solid" color="success">
                                        <Avatar>D</Avatar>
                                    </Badge>
                                </Stack>

                                {/* Buttons */}
                                <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap' }}>
                                    <Button>Default</Button>
                                    <Button variant="outlined">Outlined</Button>
                                    <Button variant="soft">Soft</Button>
                                    <Button color="success">Success</Button>
                                    <Button color="danger">Danger</Button>
                                    <Button size="sm">Small</Button>
                                    <Button size="lg">Large</Button>
                                    <Button disabled>Disabled</Button>
                                </Stack>

                                {/* Icon Buttons */}
                                <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                                    <IconButton>❤️</IconButton>
                                    <IconButton color="primary">⚙️</IconButton>
                                    <IconButton variant="outlined">🏠</IconButton>
                                    <Tooltip title="Favorite">
                                        <IconButton color="danger">★</IconButton>
                                    </Tooltip>
                                </Stack>

                                {/* Toggle Button Group */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography level="body-md" sx={{ mb: 1 }}>Toggle Button Group:</Typography>
                                    <ToggleButtonGroup 
                                        value={toggleValue} 
                                        onChange={(event, newValue) => setToggleValue(newValue)}
                                    >
                                        <Button value="option1">Option 1</Button>
                                        <Button value="option2">Option 2</Button>
                                        <Button value="option3">Option 3</Button>
                                    </ToggleButtonGroup>
                                </Box>
                            </TabPanel>

                            <TabPanel value={1}>
                                <Typography level="h3" sx={{ mb: 2 }}>Forms & Inputs</Typography>
                                
                                {/* Form Controls */}
                                <Stack spacing={2} sx={{ mb: 3 }}>
                                    <FormControl>
                                        <FormLabel>Standard Input</FormLabel>
                                        <Input placeholder="Enter text here" />
                                        <FormHelperText>This is helper text</FormHelperText>
                                    </FormControl>
                                    
                                    <FormControl>
                                        <FormLabel>Outlined Input</FormLabel>
                                        <Input variant="outlined" placeholder="Outlined input" />
                                    </FormControl>
                                    
                                    <FormControl>
                                        <FormLabel>Textarea</FormLabel>
                                        <Textarea placeholder="Multi-line text input" minRows={3} />
                                    </FormControl>
                                    
                                    <FormControl>
                                        <FormLabel>Select</FormLabel>
                                        <Select placeholder="Choose option">
                                            <Option value="1">Option 1</Option>
                                            <Option value="2">Option 2</Option>
                                            <Option value="3">Option 3</Option>
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Autocomplete</FormLabel>
                                        <Autocomplete
                                            placeholder="Search frameworks"
                                            options={autocompleteOptions}
                                            value={autocompleteValue}
                                            onChange={(event, newValue) => setAutocompleteValue(newValue)}
                                        />
                                    </FormControl>
                                </Stack>
                                
                                {/* Slider */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography level="body-md" sx={{ mb: 1 }}>Slider:</Typography>
                                    <Slider defaultValue={50} />
                                </Box>
                                
                                {/* Switches & Checkboxes */}
                                <Stack spacing={2} sx={{ mb: 3 }}>
                                    <Box>
                                        <Typography level="body-md" sx={{ mb: 1 }}>Switches:</Typography>
                                        <Stack direction="row" spacing={2}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Switch defaultChecked />
                                                <Typography>On</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Switch />
                                                <Typography>Off</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    
                                    <Box>
                                        <Typography level="body-md" sx={{ mb: 1 }}>Checkboxes:</Typography>
                                        <Stack direction="row" spacing={2}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Checkbox defaultChecked />
                                                <Typography>Checked</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Checkbox />
                                                <Typography>Unchecked</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Stack>
                                
                                {/* Radio Group */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography level="body-md" sx={{ mb: 1 }}>Radio Group:</Typography>
                                    <RadioGroup orientation="horizontal" defaultValue="option1">
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Radio value="option1" />
                                            <Typography>Option 1</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Radio value="option2" />
                                            <Typography>Option 2</Typography>
                                        </Box>
                                    </RadioGroup>
                                </Box>
                            </TabPanel>

                            <TabPanel value={2}>
                                <Typography level="h3" sx={{ mb: 2 }}>Layout & Components</Typography>
                                
                                {/* Progress Indicators */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography level="body-md" sx={{ mb: 1 }}>Progress:</Typography>
                                    <Stack spacing={2}>
                                        <LinearProgress />
                                        <LinearProgress determinate value={75} />
                                        <CircularProgress />
                                    </Stack>
                                </Box>

                                {/* Skeleton */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography level="body-md" sx={{ mb: 1 }}>Skeleton:</Typography>
                                    <Stack spacing={1}>
                                        <Skeleton variant="text" />
                                        <Skeleton variant="rectangular" height={60} />
                                        <Skeleton variant="circular" width={40} height={40} />
                                    </Stack>
                                </Box>

                                {/* List */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography level="body-md" sx={{ mb: 1 }}>List:</Typography>
                                    <Sheet variant="outlined" sx={{ maxWidth: 400 }}>
                                        <List>
                                            <ListItem>
                                                <ListItemDecorator>📋</ListItemDecorator>
                                                <ListItemContent>
                                                    <Typography>List Item 1</Typography>
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItemButton>
                                                <ListItemDecorator>📝</ListItemDecorator>
                                                <ListItemContent>Clickable Item</ListItemContent>
                                            </ListItemButton>
                                        </List>
                                    </Sheet>
                                </Box>

                                {/* Cards */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography level="body-md" sx={{ mb: 1 }}>Cards:</Typography>
                                    <Grid container spacing={2}>
                                        <Grid xs={12} md={6}>
                                            <Card>
                                                <CardOverflow>
                                                    <AspectRatio ratio="16/9">
                                                        <Box sx={{ bgcolor: 'primary.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <Typography>16:9 Ratio</Typography>
                                                        </Box>
                                                    </AspectRatio>
                                                </CardOverflow>
                                                <CardContent>
                                                    <Typography level="h4">Card Title</Typography>
                                                    <Typography>Card description</Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="sm">Action</Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Accordion */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography level="body-md" sx={{ mb: 1 }}>Accordion:</Typography>
                                    <AccordionGroup>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography>Accordion 1</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>Content 1</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography>Accordion 2</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>Content 2</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionGroup>
                                </Box>
                            </TabPanel>
                        </Tabs>
                        
                        {/* Action Buttons */}
                        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                            <Button variant="outlined" onClick={() => setOpen(true)}>
                                Open Modal
                            </Button>
                            <Button variant="outlined" onClick={() => setDrawerOpen(true)}>
                                Open Drawer
                            </Button>
                            <Button variant="outlined" onClick={() => setSnackbarOpen(true)}>
                                Show Snackbar
                            </Button>
                        </Stack>
                    </Sheet>
                    
                    {/* Modal */}
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <ModalDialog>
                            <ModalClose />
                            <Typography level="h4" sx={{ mb: 2 }}>Sample Modal</Typography>
                            <Typography sx={{ mb: 2 }}>This is a Joy UI modal.</Typography>
                            <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                                <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
                                <Button onClick={() => setOpen(false)}>OK</Button>
                            </Stack>
                        </ModalDialog>
                    </Modal>

                    {/* Drawer */}
                    <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <Box sx={{ width: 300, p: 2 }}>
                            <Typography level="h4" sx={{ mb: 2 }}>Drawer</Typography>
                            <List>
                                <ListItemButton>
                                    <ListItemDecorator>🏠</ListItemDecorator>
                                    <ListItemContent>Home</ListItemContent>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemDecorator>👤</ListItemDecorator>
                                    <ListItemContent>Profile</ListItemContent>
                                </ListItemButton>
                            </List>
                        </Box>
                    </Drawer>

                    {/* Snackbar */}
                    <Snackbar
                        open={snackbarOpen}
                        onClose={() => setSnackbarOpen(false)}
                        autoHideDuration={3000}
                        color="success"
                    >
                        Joy UI Snackbar!
                    </Snackbar>
                </Box>
            </Box>
        </CssVarsProvider>
    )
}