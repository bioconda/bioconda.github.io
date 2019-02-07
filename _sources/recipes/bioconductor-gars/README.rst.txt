.. title:: Package Recipe 'bioconductor-gars'
.. highlight: bash


bioconductor-gars
=================

.. conda:recipe:: bioconductor-gars
   :replaces_section_title:

   Feature selection aims to identify and remove redundant\, irrelevant and noisy variables from high\-dimensional datasets. Selecting informative features affects the subsequent classification and regression analyses by improving their overall performances. Several methods have been proposed to perform feature selection\: most of them relies on univariate statistics\, correlation\, entropy measurements or the usage of backward\/forward regressions. Herein\, we propose an efficient\, robust and fast method that adopts stochastic optimization approaches for high\-dimensional. GARS is an innovative implementation of a genetic algorithm that selects robust features in high\-dimensional and challenging datasets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GARS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gars/meta.yaml>`_

   


.. conda:package:: bioconductor-gars

   |downloads_bioconductor-gars| |docker_bioconductor-gars|

   :versions: 

   :depends: 

   :required~by: |required_by_bioconductor-gars|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gars

   and update with::

      conda update bioconductor-gars

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gars


.. |required_by_bioconductor-gars| conda:required_by:: bioconductor-gars
.. |downloads_bioconductor-gars| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gars.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gars| image:: https://quay.io/repository/biocontainers/bioconductor-gars/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gars







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gars/README.html

