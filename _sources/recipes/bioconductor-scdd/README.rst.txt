.. title:: Package Recipe 'bioconductor-scdd'
.. highlight: bash


bioconductor-scdd
=================

.. conda:recipe:: bioconductor-scdd
   :replaces_section_title:

   This package implements a method to analyze single\-cell RNA\- seq Data utilizing flexible Dirichlet Process mixture models. Genes with differential distributions of expression are classified into several interesting patterns of differences between two conditions. The package also includes functions for simulating data with these patterns from negative binomial distributions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scDD.html
   :license: GPL-2
   :recipe: /`bioconductor-scdd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdd/meta.yaml>`_

   


.. conda:package:: bioconductor-scdd

   |downloads_bioconductor-scdd| |docker_bioconductor-scdd|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-ebseq` >=1.22.0,<1.23.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-scran` >=1.10.0,<1.11.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-arm`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fields`  :conda:package:`r-ggplot2`  :conda:package:`r-mclust`  :conda:package:`r-outliers`  

   :required~by: |required_by_bioconductor-scdd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scdd

   and update with::

      conda update bioconductor-scdd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scdd


.. |required_by_bioconductor-scdd| conda:required_by:: bioconductor-scdd
.. |downloads_bioconductor-scdd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdd.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scdd| image:: https://quay.io/repository/biocontainers/bioconductor-scdd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdd/README.html

