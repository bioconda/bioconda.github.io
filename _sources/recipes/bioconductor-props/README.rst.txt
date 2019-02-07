.. title:: Package Recipe 'bioconductor-props'
.. highlight: bash


bioconductor-props
==================

.. conda:recipe:: bioconductor-props
   :replaces_section_title:

   This package calculates probabilistic pathway scores using gene expression data. Gene expression values are aggregated into pathway\-based scores using Bayesian network representations of biological pathways.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PROPS.html
   :license: GPL-2
   :recipe: /`bioconductor-props <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-props>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-props/meta.yaml>`_

   


.. conda:package:: bioconductor-props

   |downloads_bioconductor-props| |docker_bioconductor-props|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bnlearn`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-props|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-props

   and update with::

      conda update bioconductor-props

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-props


.. |required_by_bioconductor-props| conda:required_by:: bioconductor-props
.. |downloads_bioconductor-props| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-props.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-props| image:: https://quay.io/repository/biocontainers/bioconductor-props/status
   :target: https://quay.io/repository/biocontainers/bioconductor-props







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-props/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-props/README.html

