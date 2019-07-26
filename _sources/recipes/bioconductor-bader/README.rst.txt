:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bader'
.. highlight: bash

bioconductor-bader
==================

.. conda:recipe:: bioconductor-bader
   :replaces_section_title:

   For RNA sequencing count data\, BADER fits a Bayesian hierarchical model. The algorithm returns the posterior probability of differential expression for each gene between two groups A and B. The joint posterior distribution of the variables in the model can be returned in the form of posterior samples\, which can be used for further down\-stream analyses such as gene set enrichment.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/BADER.html
   :license: GPL-2
   :recipe: /`bioconductor-bader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bader/meta.yaml>`_
   :links: biotools: :biotools:`bader`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-bader

   |downloads_bioconductor-bader| |docker_bioconductor-bader|

   :versions: 1.22.0-1, 1.22.0-0, 1.20.1-0, 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bader

   and update with::

      conda update bioconductor-bader

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bader:<tag>

   (see `bioconductor-bader/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bader| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bader.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bader
   :alt:   (downloads)
.. |docker_bioconductor-bader| image:: https://quay.io/repository/biocontainers/bioconductor-bader/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bader
.. _`bioconductor-bader/tags`: https://quay.io/repository/biocontainers/bioconductor-bader?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bader/README.html