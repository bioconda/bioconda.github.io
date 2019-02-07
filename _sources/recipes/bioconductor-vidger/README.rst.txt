.. title:: Package Recipe 'bioconductor-vidger'
.. highlight: bash


bioconductor-vidger
===================

.. conda:recipe:: bioconductor-vidger
   :replaces_section_title:

   The aim of vidger is to rapidly generate information\-rich visualizations for the interpretation of differential gene expression results from three widely\-used tools\: Cuffdiff\, DESeq2\, and edgeR.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/vidger.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-vidger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vidger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vidger/meta.yaml>`_

   


.. conda:package:: bioconductor-vidger

   |downloads_bioconductor-vidger| |docker_bioconductor-vidger|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggally`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-knitr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rmarkdown`  :conda:package:`r-scales`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-vidger|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vidger

   and update with::

      conda update bioconductor-vidger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-vidger


.. |required_by_bioconductor-vidger| conda:required_by:: bioconductor-vidger
.. |downloads_bioconductor-vidger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vidger.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-vidger| image:: https://quay.io/repository/biocontainers/bioconductor-vidger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vidger







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vidger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vidger/README.html

