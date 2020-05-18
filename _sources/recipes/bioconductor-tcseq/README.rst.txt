:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcseq'
.. highlight: bash

bioconductor-tcseq
==================

.. conda:recipe:: bioconductor-tcseq
   :replaces_section_title:

   Time course sequencing data analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/TCseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcseq/meta.yaml>`_

   Quantitative and differential analysis of epigenomic and transcriptomic time course sequencing data\, clustering analysis and visualization of temporal patterns of time course data.


.. conda:package:: bioconductor-tcseq

   |downloads_bioconductor-tcseq| |docker_bioconductor-tcseq|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-1, 1.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-edger: >=3.30.0,<3.31.0
   :depends bioconductor-genomicalignments: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-locfit: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcseq

   and update with::

      conda update bioconductor-tcseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcseq:<tag>

   (see `bioconductor-tcseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcseq
   :alt:   (downloads)
.. |docker_bioconductor-tcseq| image:: https://quay.io/repository/biocontainers/bioconductor-tcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcseq
.. _`bioconductor-tcseq/tags`: https://quay.io/repository/biocontainers/bioconductor-tcseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcseq/README.html