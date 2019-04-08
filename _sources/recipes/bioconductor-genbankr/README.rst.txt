:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genbankr'
.. highlight: bash

bioconductor-genbankr
=====================

.. conda:recipe:: bioconductor-genbankr
   :replaces_section_title:

   Reads Genbank files.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/genbankr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genbankr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genbankr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genbankr/meta.yaml>`_
   :links: biotools: :biotools:`genbankr`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-genbankr

   |downloads_bioconductor-genbankr| |docker_bioconductor-genbankr|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genbankr

   and update with::

      conda update bioconductor-genbankr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genbankr:<tag>

   (see `bioconductor-genbankr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genbankr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genbankr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genbankr| image:: https://quay.io/repository/biocontainers/bioconductor-genbankr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genbankr
.. _`bioconductor-genbankr/tags`: https://quay.io/repository/biocontainers/bioconductor-genbankr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genbankr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genbankr/README.html