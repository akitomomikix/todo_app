import React from 'react';

interface DetailProps {
detail: string;
}

const Detail: React.FC<DetailProps> = (props: DetailProps) => {
return (
<div>{props.detail}</div>
);
};

export default Detail;