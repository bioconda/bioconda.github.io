.. title:: Package Recipe 'bioconductor-sc3'
.. highlight: bash


bioconductor-sc3
================

.. conda:recipe:: bioconductor-sc3
   :replaces_section_title:

   A tool for unsupervised clustering and analysis of single cell RNA\-Seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SC3.html
   :license: GPL-3
   :recipe: /`bioconductor-sc3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sc3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sc3/meta.yaml>`_
   :links: biotools: :biotools:`sc3`

   


.. conda:package:: bioconductor-sc3

   |downloads_bioconductor-sc3| |docker_bioconductor-sc3|

   :versions: 1.10.0, 1.8.0, 1.7.6

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-doparallel`  :conda:package:`r-dorng`  :conda:package:`r-e1071`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-pheatmap` >=1.0.8 :conda:package:`r-rcpp` >=0.11.1 :conda:package:`r-rcpparmadillo`  :conda:package:`r-robustbase`  :conda:package:`r-rocr`  :conda:package:`r-rrcov`  :conda:package:`r-shiny`  :conda:package:`r-writexls`  

   :required~by: |required_by_bioconductor-sc3|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sc3

   and update with::

      conda update bioconductor-sc3

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sc3


.. |required_by_bioconductor-sc3| conda:required_by:: bioconductor-sc3
.. |downloads_bioconductor-sc3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sc3.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sc3| image:: https://quay.io/repository/biocontainers/bioconductor-sc3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sc3







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sc3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sc3/README.html

