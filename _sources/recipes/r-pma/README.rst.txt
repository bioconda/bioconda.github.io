:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pma'
.. highlight: bash

r-pma
=====

.. conda:recipe:: r-pma
   :replaces_section_title:

   Performs Penalized Multivariate Analysis\: a penalized matrix decomposition\, sparse principal components analysis\, and sparse canonical correlation analysis\, described in the following papers\: \(1\) Witten\, Tibshirani and Hastie \(2009\) A penalized matrix decomposition\, with applications to sparse principal components and canonical correlation analysis. Biostatistics 10\(3\)\:515\-534. \(2\) Witten and Tibshirani \(2009\) Extensions of sparse canonical correlation analysis\, with applications to genomic data. Statistical Applications in Genetics and Molecular Biology 8\(1\)\: Article 28.

   :homepage: https://CRAN.R-project.org/package=PMA
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-pma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pma/meta.yaml>`_

   


.. conda:package:: r-pma

   |downloads_r-pma| |docker_r-pma|

   :versions: 1.2.1-2, 1.2.1-1, 1.2.1-0, 1.2-0, 1.1-1, 1.1-0, 1.0.11-4, 1.0.11-3, 1.0.11-2, 1.0.11-1, 1.0.11-0
   
   :depends bioconductor-impute: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pma

   and update with::

      conda update r-pma

   or use the docker container::

      docker pull quay.io/biocontainers/r-pma:<tag>

   (see `r-pma/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pma| image:: https://img.shields.io/conda/dn/bioconda/r-pma.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pma
   :alt:   (downloads)
.. |docker_r-pma| image:: https://quay.io/repository/biocontainers/r-pma/status
   :target: https://quay.io/repository/biocontainers/r-pma
.. _`r-pma/tags`: https://quay.io/repository/biocontainers/r-pma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pma/README.html