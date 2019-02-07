.. title:: Package Recipe 'bioconductor-anamir'
.. highlight: bash


bioconductor-anamir
===================

.. conda:recipe:: bioconductor-anamir
   :replaces_section_title:

   This package is intended to identify potential interactions of miRNA\-target gene interactions from miRNA and mRNA expression data. It contains functions for statistical test\, databases of miRNA\-target gene interaction and functional analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/anamiR.html
   :license: GPL-2
   :recipe: /`bioconductor-anamir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anamir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anamir/meta.yaml>`_

   


.. conda:package:: bioconductor-anamir

   |downloads_bioconductor-anamir| |docker_bioconductor-anamir|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-gage` >=2.32.0,<2.33.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-agricolae`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-gplots`  :conda:package:`r-rmysql`  

   :required~by: |required_by_bioconductor-anamir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anamir

   and update with::

      conda update bioconductor-anamir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-anamir


.. |required_by_bioconductor-anamir| conda:required_by:: bioconductor-anamir
.. |downloads_bioconductor-anamir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anamir.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-anamir| image:: https://quay.io/repository/biocontainers/bioconductor-anamir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anamir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anamir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anamir/README.html

