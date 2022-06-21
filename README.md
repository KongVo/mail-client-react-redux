The application consists of four main components:
Folders
MailList
Mail
ComposeMail
In addition to that, you have a container component i.e App.js.
The Components Folders, MailList, and Mail should render as three separate columns.
Compose Mail Component will be a full-screen component (popup).


Routes
There should be four folders:
Inbox
Sent Mails
Drafts
Trash
Implement Routing for all the folders.
Clicking the folders should change the URL and should render the corresponding emails in MailList component.


Mail List and Mail Component
The data for mails-list should be fetched from https://localhost:8001/inbox.
Load the Mail list to store and display the list from memory.
Each mail in the list should display a greyed delete button on hovering.
Clicking the mail should display the mail details in the Mail Component.
The Mail Details should be fetched from https://localhost:8001/mails/:id for each mail.
Clicking the delete button should move the mail to the trash folder.


Searching and Sorting
The MailList component should have a search bar and sort dropdown.
Searching should search for all emails in the memory from the inbox.
Sort should be based on newest on top and oldest on top. It should be based on time parameter from API.
After searching and sorting the Mail component should not display any emails and emails should be fetched only by clicking the mails.


Pagination
The bottom of MailList component should have a Next and Prev button.
At a time only six emails should be displayed in MailList component.
Clicking the next button should load the next set of emails.
The Next button must be disabled on the last page, and Prev button must be disabled on the first page.


ComposeMail Component
Clicking on the compose button should load the ComposeMail component.
It should have two input text box and a text area for fields to, subject and body.
There must be two buttons at the bottom save and send.
To field is mandatory and should have email validation by clicking send button. Clicking Send button should move it to sent mails folder.
Clicking save will move to draft folder. No validation needed.

Drafts
The saved emails should be displayed in the drafts folder.
The Mails component should have an Edit button while displaying emails from draft folder.
Clicking the edit button should load the ComposeMail component with the details from the corresponding mail.
Now clicking on the save should update the existing draft mail and click on send should move it to sent folder. It should not be listed in the draft folder.

Trash
Clicking the Delete button on the MailList should move the mail to the Trash folder.
MailList in Trash Folder should display a Restore button instead of the delete button. Clicking it should restore the mail to the corresponding folder
You should be able to delete from all three folders, i.e., inbox, sent and the draft.


Redux - Redux Saga
The emails are to be stored in a redux store. Use actions/reducers to load and show data.
Use react saga for async middleware - needed to call APIs with redux.
Use react-router for managing folder - inbox, sent, draft and trash. 

So you have two apis: http://localhost:8001/inbox and http://localhost:8001/mails/<id>
