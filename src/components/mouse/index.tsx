import React, { useState, useEffect } from 'react';
import './MouseFollower.css'; // Importe o arquivo CSS aqui

const MouseFollower: React.FC = () => {
    const [opacity, setOpacity] = useState<number>(0);
    let timer: ReturnType<typeof setTimeout>;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const follower = document.getElementById('mouse-follower') as HTMLElement | null;
            if (!follower) return; // Verifica se follower é null

            const followerRadius = 500; // Radius of the circle (half of the width/height)

            follower.style.left = `${e.pageX - followerRadius}px`;
            follower.style.top = `${e.pageY - followerRadius}px`;
            setOpacity(1);

            clearTimeout(timer);
            timer = setTimeout(() => {
                setOpacity(0);
            }, 500);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div id="mouse-follower" style={{ opacity }} />
    );
};

export default MouseFollower;
