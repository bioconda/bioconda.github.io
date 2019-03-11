:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-podkat'
.. highlight: bash

bioconductor-podkat
===================

.. conda:recipe:: bioconductor-podkat
   :replaces_section_title:

   This package provides an association test that is capable of dealing with very rare and even private variants. This is accomplished by a kernel\-based approach that takes the positions of the variants into account. The test can be used for pre\-processed matrix data\, but also directly for variant data stored in VCF files. Association testing can be performed whole\-genome\, whole\-exome\, or restricted to pre\-defined regions of interest. The test is complemented by tools for analyzing and visualizing the results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/podkat.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-podkat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podkat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podkat/meta.yaml>`_
   :links: biotools: :biotools:`podkat`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-podkat

   |downloads_bioconductor-podkat| |docker_bioconductor-podkat|

   :versions: 1.14.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-matrix: 
   
   :depends r-rcpp: >=0.11.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-podkat

   and update with::

      conda update bioconductor-podkat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-podkat:<tag>

   (see `bioconductor-podkat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-podkat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-podkat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-podkat| image:: https://quay.io/repository/biocontainers/bioconductor-podkat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-podkat
.. _`bioconductor-podkat/tags`: https://quay.io/repository/biocontainers/bioconductor-podkat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-podkat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-podkat/README.html