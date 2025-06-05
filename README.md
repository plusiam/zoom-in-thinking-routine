# Zoom-In Thinking Routine

This repository contains HTML templates for running the Zoom-In Thinking Routine with students.

## StudentWorksheet.html

`StudentWorksheet.html` presents a basic worksheet where students can view an image and write observations. The file expects `window.imageData` to be defined before the page loads. Inject this value (for example, using Google Apps Script) so the image displays correctly.

### Saving the Worksheet

Students can press the **Save as PDF** button to trigger `window.print()`. Choose **Save to PDF** in the print dialog to keep a copy of the completed worksheet.
