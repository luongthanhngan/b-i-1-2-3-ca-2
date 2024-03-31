const feedbackList = document.querySelector('.feedback-list');

const renderFeedback = (feedback) => {
  const feedbackItem = document.createElement('li');
  feedbackItem.classList.add('feedback-item');

  const feedbackName = document.createElement('h3');
  feedbackName.textContent = feedback.name;

  const feedbackContent = document.createElement('p');
  feedbackContent.textContent = feedback.content;

  const feedbackTime = document.createElement('span');
  feedbackTime.classList.add('feedback-time');
  feedbackTime.textContent = feedback.time;

  feedbackItem.appendChild(feedbackName);
  feedbackItem.appendChild(feedbackContent);
  feedbackItem.appendChild(feedbackTime);

  feedbackList.appendChild(feedbackItem);
};

// Lấy dữ liệu đóng góp từ server
// ...

// Duyệt qua dữ liệu đóng góp và hiển thị
for (const feedback of feedbackData) {
  renderFeedback(feedback);
}