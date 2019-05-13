:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crimage'
.. highlight: bash

bioconductor-crimage
====================

.. conda:recipe:: bioconductor-crimage
   :replaces_section_title:

   CRImage provides functionality to process and analyze images\, in particular to classify cells in biological images. Furthermore\, in the context of tumor images\, it provides functionality to calculate tumour cellularity.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CRImage.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-crimage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crimage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crimage/meta.yaml>`_
   :links: biotools: :biotools:`crimage`, doi: :doi:`10.1126/scitranslmed.3004330`

   


.. conda:package:: bioconductor-crimage

   |downloads_bioconductor-crimage| |docker_bioconductor-crimage|

   :versions: 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends bioconductor-acgh: >=1.60.0,<1.61.0
   :depends bioconductor-dnacopy: >=1.56.0,<1.57.0
   :depends bioconductor-ebimage: >=4.24.0,<4.25.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-mass: 
   :depends r-sgeostat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crimage

   and update with::

      conda update bioconductor-crimage

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crimage:<tag>

   (see `bioconductor-crimage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crimage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crimage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crimage
   :alt:   (downloads)
.. |docker_bioconductor-crimage| image:: https://quay.io/repository/biocontainers/bioconductor-crimage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crimage
.. _`bioconductor-crimage/tags`: https://quay.io/repository/biocontainers/bioconductor-crimage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crimage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crimage/README.html