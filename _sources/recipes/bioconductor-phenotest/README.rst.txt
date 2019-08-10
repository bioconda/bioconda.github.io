:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenotest'
.. highlight: bash

bioconductor-phenotest
======================

.. conda:recipe:: bioconductor-phenotest
   :replaces_section_title:

   Tools to test correlation between gene expression and phenotype in a way that is efficient\, structured\, fast and scalable. GSEA is also provided.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/phenoTest.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-phenotest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenotest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenotest/meta.yaml>`_

   


.. conda:package:: bioconductor-phenotest

   |downloads_bioconductor-phenotest| |docker_bioconductor-phenotest|

   :versions: 1.32.0-1, 1.30.0-0
   
   :depends bioconductor-annotate: >=1.62.0,<1.63.0
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biomart: >=2.40.0,<2.41.0
   :depends bioconductor-category: >=2.50.0,<2.51.0
   :depends bioconductor-genefilter: >=1.66.0,<1.67.0
   :depends bioconductor-gseabase: >=1.46.0,<1.47.0
   :depends bioconductor-heatplus: >=2.30.0,<2.31.0
   :depends bioconductor-hgu133a.db: >=3.2.0,<3.3.0
   :depends bioconductor-hopach: >=2.44.0,<2.45.0
   :depends bioconductor-htsanalyzer: >=2.36.0,<2.37.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-snpchip: >=2.30.0,<2.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bma: 
   :depends r-ellipse: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-hmisc: 
   :depends r-mgcv: 
   :depends r-survival: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phenotest

   and update with::

      conda update bioconductor-phenotest

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phenotest:<tag>

   (see `bioconductor-phenotest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phenotest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenotest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenotest
   :alt:   (downloads)
.. |docker_bioconductor-phenotest| image:: https://quay.io/repository/biocontainers/bioconductor-phenotest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenotest
.. _`bioconductor-phenotest/tags`: https://quay.io/repository/biocontainers/bioconductor-phenotest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenotest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenotest/README.html