:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghmcr'
.. highlight: bash

bioconductor-cghmcr
===================

.. conda:recipe:: bioconductor-cghmcr
   :replaces_section_title:

   This package provides functions to identify genomic regions of interests based on segmented copy number data from multiple samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cghMCR.html
   :license: LGPL
   :recipe: /`bioconductor-cghmcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghmcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghmcr/meta.yaml>`_
   :links: biotools: :biotools:`cghmcr`, doi: :doi:`10.1093/bioinformatics/btv298`

   


.. conda:package:: bioconductor-cghmcr

   |downloads_bioconductor-cghmcr| |docker_bioconductor-cghmcr|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-0, 1.34.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-cntools: >=1.38.0,<1.39.0
   :depends bioconductor-dnacopy: >=1.56.0,<1.57.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cghmcr

   and update with::

      conda update bioconductor-cghmcr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghmcr:<tag>

   (see `bioconductor-cghmcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghmcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghmcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghmcr
   :alt:   (downloads)
.. |docker_bioconductor-cghmcr| image:: https://quay.io/repository/biocontainers/bioconductor-cghmcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghmcr
.. _`bioconductor-cghmcr/tags`: https://quay.io/repository/biocontainers/bioconductor-cghmcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghmcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghmcr/README.html