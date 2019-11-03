:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylpipe'
.. highlight: bash

bioconductor-methylpipe
=======================

.. conda:recipe:: bioconductor-methylpipe
   :replaces_section_title:

   Memory efficient analysis of base resolution DNA methylation data in both the CpG and non\-CpG sequence context. Integration of DNA methylation data derived from any methodology providing base\- or low\-resolution data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/methylPipe.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-methylpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylpipe/meta.yaml>`_
   :links: biotools: :biotools:`methylpipe`

   


.. conda:package:: bioconductor-methylpipe

   |downloads_bioconductor-methylpipe| |docker_bioconductor-methylpipe|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-gviz: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-marray: >=1.64.0,<1.65.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylpipe

   and update with::

      conda update bioconductor-methylpipe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylpipe:<tag>

   (see `bioconductor-methylpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylpipe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylpipe
   :alt:   (downloads)
.. |docker_bioconductor-methylpipe| image:: https://quay.io/repository/biocontainers/bioconductor-methylpipe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylpipe
.. _`bioconductor-methylpipe/tags`: https://quay.io/repository/biocontainers/bioconductor-methylpipe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylpipe/README.html