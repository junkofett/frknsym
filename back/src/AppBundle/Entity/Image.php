<?php
// src/AppBundle/Entity/Image.php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity
 */
class Image
{
    /**
     * @ORM\Column(type="integer", name="id_image")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", name="url_image")
     * @Assert\NotBlank()
     */
    private $url;

    /**
     * @ORM\Column(type="integer", name="crop_url")
     */
    private $urlCrop;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $title;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set url
     *
     * @param string $url
     *
     * @return Image
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set urlCrop
     *
     * @param integer $urlCrop
     *
     * @return Image
     */
    public function setUrlCrop($urlCrop)
    {
        $this->urlCrop = $urlCrop;

        return $this;
    }

    /**
     * Get urlCrop
     *
     * @return integer
     */
    public function getUrlCrop()
    {
        return $this->urlCrop;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Image
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }
}
