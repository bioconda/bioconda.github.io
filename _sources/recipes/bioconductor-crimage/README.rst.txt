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

   :versions: 1.30.0, 1.28.0, 1.26.0

   :depends: :conda:package:`bioconductor-acgh` >=1.60.0,<1.61.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-ebimage` >=4.24.0,<4.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  :conda:package:`r-foreach`  :conda:package:`r-mass`  :conda:package:`r-sgeostat`  

   :required~by: |required_by_bioconductor-crimage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crimage

   and update with::

      conda update bioconductor-crimage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-crimage


.. |required_by_bioconductor-crimage| conda:required_by:: bioconductor-crimage
.. |downloads_bioconductor-crimage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crimage.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-crimage| image:: https://quay.io/repository/biocontainers/bioconductor-crimage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crimage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crimage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crimage/README.html

