:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-varianttools'
.. highlight: bash

bioconductor-varianttools
=========================

.. conda:recipe:: bioconductor-varianttools
   :replaces_section_title:

   Explore\, diagnose\, and compare variant calls using filters.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/VariantTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-varianttools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-varianttools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-varianttools/meta.yaml>`_
   :links: biotools: :biotools:`varianttools`, doi: :doi:`10.1101/027227`

   


.. conda:package:: bioconductor-varianttools

   |downloads_bioconductor-varianttools| |docker_bioconductor-varianttools|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.1-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-varianttools

   and update with::

      conda update bioconductor-varianttools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-varianttools:<tag>

   (see `bioconductor-varianttools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-varianttools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-varianttools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-varianttools
   :alt:   (downloads)
.. |docker_bioconductor-varianttools| image:: https://quay.io/repository/biocontainers/bioconductor-varianttools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-varianttools
.. _`bioconductor-varianttools/tags`: https://quay.io/repository/biocontainers/bioconductor-varianttools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-varianttools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-varianttools/README.html