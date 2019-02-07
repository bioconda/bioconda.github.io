.. title:: Package Recipe 'bioconductor-desubs'
.. highlight: bash


bioconductor-desubs
===================

.. conda:recipe:: bioconductor-desubs
   :replaces_section_title:

   DEsubs is a network\-based systems biology package that extracts disease\-perturbed subpathways within a pathway network as recorded by RNA\-seq experiments. It contains an extensive and customizable framework covering a broad range of operation modes at all stages of the subpathway analysis\, enabling a case\-specific approach. The operation modes refer to the pathway network construction and processing\, the subpathway extraction\, visualization and enrichment analysis with regard to various biological and pharmacological features. Its capabilities render it a tool\-guide for both the modeler and experimentalist for the identification of more robust systems\-level biomarkers for complex diseases.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DEsubs.html
   :license: GPL-3
   :recipe: /`bioconductor-desubs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desubs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desubs/meta.yaml>`_

   


.. conda:package:: bioconductor-desubs

   |downloads_bioconductor-desubs| |docker_bioconductor-desubs|

   :versions: 1.8.1

   :depends: :conda:package:`bioconductor-deseq` >=1.34.0,<1.35.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-ebseq` >=1.22.0,<1.23.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rbgl` >=1.58.0,<1.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-jsonlite`  :conda:package:`r-locfit`  :conda:package:`r-matrix`  :conda:package:`r-nbpseq`  :conda:package:`r-pheatmap`  

   :required~by: |required_by_bioconductor-desubs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-desubs

   and update with::

      conda update bioconductor-desubs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-desubs


.. |required_by_bioconductor-desubs| conda:required_by:: bioconductor-desubs
.. |downloads_bioconductor-desubs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desubs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-desubs| image:: https://quay.io/repository/biocontainers/bioconductor-desubs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desubs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desubs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desubs/README.html

