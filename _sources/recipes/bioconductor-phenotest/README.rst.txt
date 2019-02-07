.. title:: Package Recipe 'bioconductor-phenotest'
.. highlight: bash


bioconductor-phenotest
======================

.. conda:recipe:: bioconductor-phenotest
   :replaces_section_title:

   Tools to test correlation between gene expression and phenotype in a way that is efficient\, structured\, fast and scalable. GSEA is also provided.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/phenoTest.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-phenotest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenotest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenotest/meta.yaml>`_

   


.. conda:package:: bioconductor-phenotest

   |downloads_bioconductor-phenotest| |docker_bioconductor-phenotest|

   :versions: 1.30.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-category` >=2.48.0,<2.49.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-heatplus` >=2.28.0,<2.29.0 :conda:package:`bioconductor-hgu133a.db` >=3.2.0,<3.3.0 :conda:package:`bioconductor-hopach` >=2.42.0,<2.43.0 :conda:package:`bioconductor-htsanalyzer` >=2.34.0,<2.35.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-snpchip` >=2.28.0,<2.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bma`  :conda:package:`r-ellipse`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-hmisc`  :conda:package:`r-mgcv`  :conda:package:`r-survival`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-phenotest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phenotest

   and update with::

      conda update bioconductor-phenotest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-phenotest


.. |required_by_bioconductor-phenotest| conda:required_by:: bioconductor-phenotest
.. |downloads_bioconductor-phenotest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenotest.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-phenotest| image:: https://quay.io/repository/biocontainers/bioconductor-phenotest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenotest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenotest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenotest/README.html

