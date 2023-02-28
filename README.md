# Plants sheet App

This application is a google sheets to provide additional features
for managing the sync inventory sheet for The Tree Center.

## Features

- Quickly create a filter view
- Create a backup sheet to use before running campaigns
- Restore a backup sheet to the main inventory

## Development

First, push the latest version of the app using `clasp`:

```bash
clasp push
```

Open the script using clasp: 
    
```bash 
clasp open
```
## Usage

To attach your Google Apps Script project to another Google Sheets document, you can follow these steps:

- Open the Google Sheets document you want to attach the script to.
- Select "Tools" > "Script editor" from the Google Sheets menu. This will open the script editor for the current document.
- In the script editor, select "File" > "Make a copy" to create a copy of the script project.
- Give the copied project a name and select the destination folder where you want to save it.
- Close the script editor and open the copied project by selecting "Tools" > "Script editor" again.
- In the script editor, select "File" > "Project properties" and note down the Script ID, which is a long string of characters that uniquely identifies your project.
- Open the Google Drive folder where your original script project is located.
- Right-click on the folder and select "Share" to open the sharing settings for the folder.
- In the sharing settings, click the "Advanced" link at the bottom of the screen.
- In the "Advanced" settings, click the "Add an editor" button.
- In the "Invite people" dialog, enter the email address of the user you want to share the script project with.
- Click the "Send" button to send the invitation.
- Once the user has accepted the invitation and has access to the folder, they can open the script project in their own Google Drive account by selecting "Tools" > "Script editor" in the attached Google Sheets document and entering the Script ID in the "File" > "Open script" dialog.

## Feature Ideas 

- [ ] Create a github action to deploy the script to google sheet

## Notes

This application is also used as a way to test how far we can
get writing a full featured, polished google sheets app using
ChatGPT and Github Copilot.