:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simpleseg'
.. highlight: bash

bioconductor-simpleseg
======================

.. conda:recipe:: bioconductor-simpleseg
   :replaces_section_title:
   :noindex:

   A package to perform simple cell segmentation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/simpleSeg.html
   :license: GPL-3
   :recipe: /`bioconductor-simpleseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpleseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpleseg/meta.yaml>`_

   Image segmentation is the process of identifying the borders of individual objects \(in this case cells\) within an image. This allows for the features of cells such as marker expression and morphology to be extracted\, stored and analysed. simpleSeg provides functionality for user friendly\, watershed based segmentation on multiplexed cellular images in R based on the intensity of user specified protein marker channels. simpleSeg can also be used for the normalization of single cell data obtained from multiple images.


.. conda:package:: bioconductor-simpleseg

   |downloads_bioconductor-simpleseg| |docker_bioconductor-simpleseg|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-cytomapper: ``>=1.12.0,<1.13.0``
   :depends bioconductor-ebimage: ``>=4.42.0,<4.43.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-spatstat.geom: 
   :depends r-terra: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simpleseg

   and update with::

      conda update bioconductor-simpleseg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simpleseg:<tag>

   (see `bioconductor-simpleseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simpleseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simpleseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simpleseg
   :alt:   (downloads)
.. |docker_bioconductor-simpleseg| image:: https://quay.io/repository/biocontainers/bioconductor-simpleseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simpleseg
.. _`bioconductor-simpleseg/tags`: https://quay.io/repository/biocontainers/bioconductor-simpleseg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simpleseg";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simpleseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simpleseg/README.html