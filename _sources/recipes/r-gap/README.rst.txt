:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gap'
.. highlight: bash

r-gap
=====

.. conda:recipe:: r-gap
   :replaces_section_title:

   It is designed as an integrated package for genetic data analysis of both population and family data. Currently\, it contains functions for sample size calculations of both population\-based and family\-based designs\, probability of familial disease aggregation\, kinship calculation\, statistics in linkage analysis\, and association analysis involving genetic markers including haplotype analysis with or without environmental covariates.

   :homepage: https://jinghuazhao.github.io
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-gap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gap/meta.yaml>`_

   


.. conda:package:: r-gap

   |downloads_r-gap| |docker_r-gap|

   :versions: 1.2.1-1, 1.2.1-0, 1.1_22-0
   
   :depends libgfortran: >=3.0.1,<4.0.0.a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gap

   and update with::

      conda update r-gap

   or use the docker container::

      docker pull quay.io/biocontainers/r-gap:<tag>

   (see `r-gap/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gap| image:: https://img.shields.io/conda/dn/bioconda/r-gap.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gap
   :alt:   (downloads)
.. |docker_r-gap| image:: https://quay.io/repository/biocontainers/r-gap/status
   :target: https://quay.io/repository/biocontainers/r-gap
.. _`r-gap/tags`: https://quay.io/repository/biocontainers/r-gap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gap/README.html