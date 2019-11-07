:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swfdr'
.. highlight: bash

bioconductor-swfdr
==================

.. conda:recipe:: bioconductor-swfdr
   :replaces_section_title:

   Science\-wise false discovery rate and proportion of true null hypotheses estimation

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/swfdr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-swfdr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swfdr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swfdr/meta.yaml>`_

   This package allows users to estimate the science\-wise false discovery rate from Jager and Leek\, \"Empirical estimates suggest most published medical research is true\,\" 2013\, Biostatistics\, using an EM approach due to the presence of rounding and censoring. It also allows users to estimate the proportion of true null hypotheses in the presence of covariates\, using a regression framework\, as per Boca and Leek\, \"A direct approach to estimating false discovery rates conditional on covariates\,\" 2018\, PeerJ.


.. conda:package:: bioconductor-swfdr

   |downloads_bioconductor-swfdr| |docker_bioconductor-swfdr|

   :versions: 1.12.0-0, 1.10.0-1, 1.10.0-0, 1.8.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-swfdr

   and update with::

      conda update bioconductor-swfdr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-swfdr:<tag>

   (see `bioconductor-swfdr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-swfdr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swfdr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swfdr
   :alt:   (downloads)
.. |docker_bioconductor-swfdr| image:: https://quay.io/repository/biocontainers/bioconductor-swfdr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swfdr
.. _`bioconductor-swfdr/tags`: https://quay.io/repository/biocontainers/bioconductor-swfdr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swfdr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swfdr/README.html