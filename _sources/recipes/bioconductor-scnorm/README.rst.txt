.. title:: Package Recipe 'bioconductor-scnorm'
.. highlight: bash


bioconductor-scnorm
===================

.. conda:recipe:: bioconductor-scnorm
   :replaces_section_title:

   This package implements SCnorm — a method to normalize single\-cell RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SCnorm.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-scnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scnorm/meta.yaml>`_

   


.. conda:package:: bioconductor-scnorm

   |downloads_bioconductor-scnorm| |docker_bioconductor-scnorm|

   :versions: 1.4.3, 1.2.1, 1.0.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-data.table`  :conda:package:`r-forcats`  :conda:package:`r-ggplot2`  :conda:package:`r-moments`  :conda:package:`r-quantreg`  

   :required~by: |required_by_bioconductor-scnorm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scnorm

   and update with::

      conda update bioconductor-scnorm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scnorm


.. |required_by_bioconductor-scnorm| conda:required_by:: bioconductor-scnorm
.. |downloads_bioconductor-scnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scnorm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scnorm| image:: https://quay.io/repository/biocontainers/bioconductor-scnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scnorm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scnorm/README.html

