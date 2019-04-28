:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maxcontrastprojection'
.. highlight: bash

bioconductor-maxcontrastprojection
==================================

.. conda:recipe:: bioconductor-maxcontrastprojection
   :replaces_section_title:

   A problem when recording 3D fluorescent microscopy images is how to properly present these results in 2D. Maximum intensity projections are a popular method to determine the focal plane of each pixel in the image. The problem with this approach\, however\, is that out\-of\-focus elements will still be visible\, making edges and fine structures difficult to detect. This package aims to resolve this problem by using the contrast around a given pixel to determine the focal plane\, allowing for a much cleaner structure detection than would be otherwise possible. For convenience\, this package also contains functions to perform various other types of projections\, including a maximum intensity projection.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MaxContrastProjection.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-maxcontrastprojection <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maxcontrastprojection>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maxcontrastprojection/meta.yaml>`_

   


.. conda:package:: bioconductor-maxcontrastprojection

   |downloads_bioconductor-maxcontrastprojection| |docker_bioconductor-maxcontrastprojection|

   :versions: 1.6.1-0, 1.6.0-0
   
   :depends bioconductor-ebimage: >=4.24.0,<4.25.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maxcontrastprojection

   and update with::

      conda update bioconductor-maxcontrastprojection

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maxcontrastprojection:<tag>

   (see `bioconductor-maxcontrastprojection/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maxcontrastprojection| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maxcontrastprojection.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-maxcontrastprojection| image:: https://quay.io/repository/biocontainers/bioconductor-maxcontrastprojection/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maxcontrastprojection
.. _`bioconductor-maxcontrastprojection/tags`: https://quay.io/repository/biocontainers/bioconductor-maxcontrastprojection?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maxcontrastprojection/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maxcontrastprojection/README.html