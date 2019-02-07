.. title:: Package Recipe 'bioconductor-srap'
.. highlight: bash


bioconductor-srap
=================

.. conda:recipe:: bioconductor-srap
   :replaces_section_title:

   This package provides a pipeline for gene expression analysis \(primarily for RNA\-Seq data\).  The normalization function is specific for RNA\-Seq analysis\, but all other functions \(Quality Control Figures\, Differential Expression and Visualization\, and Functional Enrichment via BD\-Func\) will work with any type of gene expression data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sRAP.html
   :license: GPL-3
   :recipe: /`bioconductor-srap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srap/meta.yaml>`_
   :links: biotools: :biotools:`srap`

   


.. conda:package:: bioconductor-srap

   |downloads_bioconductor-srap| |docker_bioconductor-srap|

   :versions: 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-pls`  :conda:package:`r-rocr`  :conda:package:`r-writexls`  

   :required~by: |required_by_bioconductor-srap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-srap

   and update with::

      conda update bioconductor-srap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-srap


.. |required_by_bioconductor-srap| conda:required_by:: bioconductor-srap
.. |downloads_bioconductor-srap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-srap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-srap| image:: https://quay.io/repository/biocontainers/bioconductor-srap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-srap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-srap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-srap/README.html

