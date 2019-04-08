:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaither'
.. highlight: bash

bioconductor-rnaither
=====================

.. conda:recipe:: bioconductor-rnaither
   :replaces_section_title:

   RNAither analyzes cell\-based RNAi screens\, and includes quality assessment\, customizable normalization and statistical tests\, leading to lists of significant genes and biological processes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RNAither.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnaither <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaither>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaither/meta.yaml>`_
   :links: biotools: :biotools:`rnaither`, doi: :doi:`10.1093/bioinformatics/btp014`

   


.. conda:package:: bioconductor-rnaither

   |downloads_bioconductor-rnaither| |docker_bioconductor-rnaither|

   :versions: 2.30.0-0, 2.28.0-0, 2.24.0-0
   
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-geneplotter: >=1.60.0,<1.61.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-prada: >=1.58.0,<1.59.0
   :depends bioconductor-rankprod: >=3.8.0,<3.9.0
   :depends bioconductor-splots: >=1.48.0,<1.49.0
   :depends bioconductor-topgo: >=2.34.0,<2.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-car: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaither

   and update with::

      conda update bioconductor-rnaither

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaither:<tag>

   (see `bioconductor-rnaither/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaither| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaither.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnaither| image:: https://quay.io/repository/biocontainers/bioconductor-rnaither/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaither
.. _`bioconductor-rnaither/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaither?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaither/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaither/README.html