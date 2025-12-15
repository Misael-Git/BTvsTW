function updatePreview(sourceId, targetId) {
    const source = document.getElementById(sourceId);
    const target = document.getElementById(targetId);
    target.innerHTML = source.innerText;
}

updatePreview('code-bs', 'preview-bs');
updatePreview('code-tw', 'preview-tw');

document.getElementById('code-bs').addEventListener('input', () => updatePreview('code-bs', 'preview-bs'));
document.getElementById('code-tw').addEventListener('input', () => updatePreview('code-tw', 'preview-tw'));