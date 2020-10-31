:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosummaries'
.. highlight: bash

bioconductor-gosummaries
========================

.. conda:recipe:: bioconductor-gosummaries
   :replaces_section_title:
   :noindex:

   Word cloud summaries of GO enrichment analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GOsummaries.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gosummaries <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosummaries>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosummaries/meta.yaml>`_

   A package to visualise Gene Ontology \(GO\) enrichment analysis results on gene lists arising from different analyses such clustering or PCA. The significant GO categories are visualised as word clouds that can be combined with different plots summarising the underlying data.


.. conda:package:: bioconductor-gosummaries

   |downloads_bioconductor-gosummaries| |docker_bioconductor-gosummaries|

   :versions:
      
      

      ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``

      

   
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-gprofiler: 
   :depends r-gtable: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gosummaries

   and update with::

      conda update bioconductor-gosummaries

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gosummaries:<tag>

   (see `bioconductor-gosummaries/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gosummaries| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosummaries.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosummaries
   :alt:   (downloads)
.. |docker_bioconductor-gosummaries| image:: https://quay.io/repository/biocontainers/bioconductor-gosummaries/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosummaries
.. _`bioconductor-gosummaries/tags`: https://quay.io/repository/biocontainers/bioconductor-gosummaries?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosummaries/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosummaries/README.html