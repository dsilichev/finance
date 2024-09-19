import PropTypes from 'prop-types';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostCardContainer = ({
  className,
  id,
  title,
  imageUrl,
  publishedAt,
  commentsCount,
}) => {
  return (
    <div className={className}>
      <Link to={`post/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className="post-card-footer">
          <h4>{title}</h4>
          <div className="post-card-info">
            <div className="published-at">
              <Icon id="fa-calendar" margin="0 10px 0 0" size="18px" cursor="default" />
              <div>{publishedAt}</div>
            </div>
            <div className="comments-count">
              <Icon id="fa-comment" margin="0 10px 0 0" size="18px" cursor="default" />
              <div>{commentsCount}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)`
  display: flex;
  flex-direction: column;

  width: 280px;
  border: 1px solid #000;

  & img {
    display: block;
    width: 100%;
  }

  & .post-card-footer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    border-top: 1px solid #000;
  }

  & .post-card-footer h4 {
    margin: 0;
  }

  & .post-card-info {
    display: flex;
    justify-content: space-between;
  }

  & .published-at {
    display: flex;
    align-items: center;
  }

  & .comments-count {
    display: flex;
    align-items: center;
  }
`;

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
};
