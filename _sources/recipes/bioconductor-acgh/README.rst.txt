.. title:: Package Recipe 'bioconductor-acgh'
.. highlight: bash


bioconductor-acgh
=================

.. conda:recipe:: bioconductor-acgh
   :replaces_section_title:

   Functions for reading aCGH data from image analysis output files and clone information files\, creation of aCGH S3 objects for storing these data. Basic methods for accessing\/replacing\, subsetting\, printing and plotting aCGH objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/aCGH.html
   :license: GPL-2
   :recipe: /`bioconductor-acgh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acgh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acgh/meta.yaml>`_
   :links: biotools: :biotools:`acgh`, doi: :doi:`10.1093/bioinformatics/bti677`

   


.. conda:package:: bioconductor-acgh

   |downloads_bioconductor-acgh| |docker_bioconductor-acgh|

   :versions: 1.60.0, 1.58.0, 1.56.0, 1.54.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-acgh|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-acgh

   and update with::

      conda update bioconductor-acgh

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-acgh


.. |required_by_bioconductor-acgh| conda:required_by:: bioconductor-acgh
.. |downloads_bioconductor-acgh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-acgh.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-acgh| image:: https://quay.io/repository/biocontainers/bioconductor-acgh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-acgh







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-acgh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-acgh/README.html

