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

   :versions: 1.0.11

   :depends: :conda:package:`bioconductor-impute`  :conda:package:`r-base` 3.4.1* 

   :required~by: |required_by_r-pma|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pma

   and update with::

      conda update r-pma

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-pma


.. |required_by_r-pma| conda:required_by:: r-pma
.. |downloads_r-pma| image:: https://img.shields.io/conda/dn/bioconda/r-pma.svg?style=flat
   :alt:   (downloads)
.. |docker_r-pma| image:: https://quay.io/repository/biocontainers/r-pma/status
   :target: https://quay.io/repository/biocontainers/r-pma







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pma/README.html

