:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-matrixeqtl'
.. highlight: bash

r-matrixeqtl
============

.. conda:recipe:: r-matrixeqtl
   :replaces_section_title:

   Matrix eQTL is designed for fast eQTL analysis on large datasets. Matrix eQTL can test for association between genotype  and gene expression using linear regression  with either additive or ANOVA genotype effects. The models can include covariates to account for factors  as population stratification\, gender\, and clinical variables.  It also supports models with heteroscedastic and\/or correlated errors\, false discovery rate estimation and  separate treatment of local \(cis\) and distant \(trans\) eQTLs.

   :homepage: http://www.bios.unc.edu/research/genomic_software/Matrix_eQTL/
   :license: LGPL / LGPL-3
   :recipe: /`r-matrixeqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-matrixeqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-matrixeqtl/meta.yaml>`_

   


.. conda:package:: r-matrixeqtl

   |downloads_r-matrixeqtl| |docker_r-matrixeqtl|

   :versions: 2.1.1-0
   
   :depends r: 3.3.1*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-matrixeqtl

   and update with::

      conda update r-matrixeqtl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-matrixeqtl:<tag>

   (see `r-matrixeqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_r-matrixeqtl| image:: https://img.shields.io/conda/dn/bioconda/r-matrixeqtl.svg?style=flat
   :alt:   (downloads)
.. |docker_r-matrixeqtl| image:: https://quay.io/repository/biocontainers/r-matrixeqtl/status
   :target: https://quay.io/repository/biocontainers/r-matrixeqtl
.. _`r-matrixeqtl/tags`: https://quay.io/repository/biocontainers/r-matrixeqtl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-matrixeqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-matrixeqtl/README.html