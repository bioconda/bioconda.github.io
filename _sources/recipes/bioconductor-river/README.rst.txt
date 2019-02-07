.. title:: Package Recipe 'bioconductor-river'
.. highlight: bash


bioconductor-river
==================

.. conda:recipe:: bioconductor-river
   :replaces_section_title:

   An implementation of a probabilistic modeling framework that jointly analyzes personal genome and transcriptome data to estimate the probability that a variant has regulatory impact in that individual. It is based on a generative model that assumes that genomic annotations\, such as the location of a variant with respect to regulatory elements\, determine the prior probability that variant is a functional regulatory variant\, which is an unobserved variable. The functional regulatory variant status then influences whether nearby genes are likely to display outlier levels of gene expression in that person. See the RIVER website for more information\, documentation and examples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RIVER.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-river <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-river>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-river/meta.yaml>`_

   


.. conda:package:: bioconductor-river

   |downloads_bioconductor-river| |docker_bioconductor-river|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-glmnet`  :conda:package:`r-proc`  

   :required~by: |required_by_bioconductor-river|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-river

   and update with::

      conda update bioconductor-river

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-river


.. |required_by_bioconductor-river| conda:required_by:: bioconductor-river
.. |downloads_bioconductor-river| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-river.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-river| image:: https://quay.io/repository/biocontainers/bioconductor-river/status
   :target: https://quay.io/repository/biocontainers/bioconductor-river







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-river/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-river/README.html

