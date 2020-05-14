:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mgsz'
.. highlight: bash

r-mgsz
======

.. conda:recipe:: r-mgsz
   :replaces_section_title:

   Performs gene set analysis based on GSZ scoring function and asymptotic p\-value. It is different from GSZ in that it implements asymptotic p\-values instead of empirical p\-values. Asymptotic p\-values are calculated by fitting suitable distribution model to the null distribution. Unlike empirical p\-values\, resolution of asymptotic p\-values are independent of the number of permutations and hence requires considerably fewer permutations. In addition\, this package allows gene set analysis with seven other popular gene set analysis methods.

   :homepage: https://CRAN.R-project.org/package=mGSZ
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-mgsz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mgsz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mgsz/meta.yaml>`_

   


.. conda:package:: r-mgsz

   |downloads_r-mgsz| |docker_r-mgsz|

   :versions: 1.0-1, 1.0-0
   
   :depends bioconductor-biobase: 
   :depends bioconductor-limma: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-gsa: 
   :depends r-ismev: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mgsz

   and update with::

      conda update r-mgsz

   or use the docker container::

      docker pull quay.io/biocontainers/r-mgsz:<tag>

   (see `r-mgsz/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mgsz| image:: https://img.shields.io/conda/dn/bioconda/r-mgsz.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mgsz
   :alt:   (downloads)
.. |docker_r-mgsz| image:: https://quay.io/repository/biocontainers/r-mgsz/status
   :target: https://quay.io/repository/biocontainers/r-mgsz
.. _`r-mgsz/tags`: https://quay.io/repository/biocontainers/r-mgsz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mgsz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mgsz/README.html