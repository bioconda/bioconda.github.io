:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apeglm'
.. highlight: bash

bioconductor-apeglm
===================

.. conda:recipe:: bioconductor-apeglm
   :replaces_section_title:

   apeglm provides Bayesian shrinkage estimators for effect sizes for a variety of GLM models\, using approximation of the posterior for individual coefficients.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/apeglm.html
   :license: GPL-2
   :recipe: /`bioconductor-apeglm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apeglm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apeglm/meta.yaml>`_

   


.. conda:package:: bioconductor-apeglm

   |downloads_bioconductor-apeglm| |docker_bioconductor-apeglm|

   :versions: 1.4.1-0, 1.2.1-0, 1.0.3-0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-emdbook: 
   
   :depends r-rcpp: 
   
   :depends r-rcppeigen: 
   
   :depends r-rcppnumerical: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-apeglm

   and update with::

      conda update bioconductor-apeglm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-apeglm:<tag>

   (see `bioconductor-apeglm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-apeglm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apeglm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-apeglm| image:: https://quay.io/repository/biocontainers/bioconductor-apeglm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apeglm
.. _`bioconductor-apeglm/tags`: https://quay.io/repository/biocontainers/bioconductor-apeglm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apeglm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apeglm/README.html