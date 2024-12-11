function addNotes() {
    const conversationBox = document.getElementById('conversationBox');
    
    // Create note elements
    const topLeftNote = document.createElement('div');
    topLeftNote.className = 'note top-left';
    topLeftNote.textContent = 'note above';

    const middleRightNote = document.createElement('div');
    middleRightNote.className = 'note middle-right';
    middleRightNote.textContent = 'note at the right';

    const bottomLeftNote = document.createElement('div');
    bottomLeftNote.className = 'note bottom-left';
    bottomLeftNote.textContent = 'note below';

    // Append notes to the conversation box
    conversationBox.appendChild(topLeftNote);
    conversationBox.appendChild(middleRightNote);
    conversationBox.appendChild(bottomLeftNote);
}

// Call the function when the page loads
window.onload = addNotes;