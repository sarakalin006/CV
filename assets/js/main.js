function toggleTimelineDescription(button) {
  const timelineItem = button.closest('.timeline-item');
  const shortDesc = timelineItem.querySelector('.timeline-description-short');
  const fullDesc = timelineItem.querySelector('.timeline-description-full');
  
  if (fullDesc.classList.contains('expanded')) {
    // Currently expanded, so collapse
    fullDesc.classList.remove('expanded');
    shortDesc.classList.remove('collapsed');
  } else {
    // Currently collapsed, so expand
    fullDesc.classList.add('expanded');
    shortDesc.classList.add('collapsed');
  }
}