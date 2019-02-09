.. title:: Package Recipe 'bioconductor-gosummaries'
.. highlight: bash


bioconductor-gosummaries
========================

.. conda:recipe:: bioconductor-gosummaries
   :replaces_section_title:

   A package to visualise Gene Ontology \(GO\) enrichment analysis results on gene lists arising from different analyses such clustering or PCA. The significant GO categories are visualised as word clouds that can be combined with different plots summarising the underlying data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GOsummaries.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gosummaries <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosummaries>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosummaries/meta.yaml>`_

   


.. conda:package:: bioconductor-gosummaries

   |downloads_bioconductor-gosummaries| |docker_bioconductor-gosummaries|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gprofiler`  :conda:package:`r-gtable`  :conda:package:`r-plyr`  :conda:package:`r-rcpp`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-gosummaries|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gosummaries

   and update with::

      conda update bioconductor-gosummaries

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gosummaries


.. |required_by_bioconductor-gosummaries| conda:required_by:: bioconductor-gosummaries
.. |downloads_bioconductor-gosummaries| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosummaries.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gosummaries| image:: https://quay.io/repository/biocontainers/bioconductor-gosummaries/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosummaries







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosummaries/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosummaries/README.html

