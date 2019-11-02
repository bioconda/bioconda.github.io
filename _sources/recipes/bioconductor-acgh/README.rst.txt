:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-acgh'
.. highlight: bash

bioconductor-acgh
=================

.. conda:recipe:: bioconductor-acgh
   :replaces_section_title:

   Functions for reading aCGH data from image analysis output files and clone information files\, creation of aCGH S3 objects for storing these data. Basic methods for accessing\/replacing\, subsetting\, printing and plotting aCGH objects.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/aCGH.html
   :license: GPL-2
   :recipe: /`bioconductor-acgh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acgh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acgh/meta.yaml>`_
   :links: biotools: :biotools:`acgh`, doi: :doi:`10.1093/bioinformatics/bti677`

   


.. conda:package:: bioconductor-acgh

   |downloads_bioconductor-acgh| |docker_bioconductor-acgh|

   :versions: 1.64.0-0, 1.62.0-1, 1.60.0-0, 1.58.0-0, 1.56.0-0, 1.54.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-multtest: >=2.42.0,<2.43.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-acgh

   and update with::

      conda update bioconductor-acgh

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-acgh:<tag>

   (see `bioconductor-acgh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-acgh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-acgh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-acgh
   :alt:   (downloads)
.. |docker_bioconductor-acgh| image:: https://quay.io/repository/biocontainers/bioconductor-acgh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-acgh
.. _`bioconductor-acgh/tags`: https://quay.io/repository/biocontainers/bioconductor-acgh?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-acgh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-acgh/README.html