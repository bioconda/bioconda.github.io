.. title:: Package Recipe 'bioconductor-cordon'
.. highlight: bash


bioconductor-cordon
===================

.. conda:recipe:: bioconductor-cordon
   :replaces_section_title:

   Tool for analysis of codon usage in various unannotated or KEGG\/COG annotated DNA sequences. Calculates different measures of CU bias and CU\-based predictors of gene expressivity\, and performs gene set enrichment analysis for annotated sequences. Implements several methods for visualization of CU and enrichment analysis results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/coRdon.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cordon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cordon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cordon/meta.yaml>`_

   


.. conda:package:: bioconductor-cordon

   |downloads_bioconductor-cordon| |docker_bioconductor-cordon|

   :versions: 1.0.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-purrr`  

   :required~by: |required_by_bioconductor-cordon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cordon

   and update with::

      conda update bioconductor-cordon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cordon


.. |required_by_bioconductor-cordon| conda:required_by:: bioconductor-cordon
.. |downloads_bioconductor-cordon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cordon.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cordon| image:: https://quay.io/repository/biocontainers/bioconductor-cordon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cordon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cordon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cordon/README.html

