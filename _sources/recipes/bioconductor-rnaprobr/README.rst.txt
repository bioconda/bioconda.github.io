:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaprobr'
.. highlight: bash

bioconductor-rnaprobr
=====================

.. conda:recipe:: bioconductor-rnaprobr
   :replaces_section_title:

   This package facilitates analysis of Next Generation Sequencing data for which positional information with a single nucleotide resolution is a key. It allows for applying different types of relevant normalizations\, data visualization and export in a table or UCSC compatible bedgraph file.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RNAprobR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-rnaprobr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaprobr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaprobr/meta.yaml>`_
   :links: biotools: :biotools:`rnaprobr`

   


.. conda:package:: bioconductor-rnaprobr

   |downloads_bioconductor-rnaprobr| |docker_bioconductor-rnaprobr|

   :versions: 1.14.0-0, 1.12.0-0, 1.9.0-0, 1.8.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-plyr: >=1.8.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaprobr

   and update with::

      conda update bioconductor-rnaprobr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaprobr:<tag>

   (see `bioconductor-rnaprobr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaprobr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaprobr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnaprobr| image:: https://quay.io/repository/biocontainers/bioconductor-rnaprobr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaprobr
.. _`bioconductor-rnaprobr/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaprobr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaprobr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaprobr/README.html