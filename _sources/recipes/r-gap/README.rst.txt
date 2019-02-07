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

   :versions: 1.1_22

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libgfortran-ng` >=7,<8.0a0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_r-gap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gap

   and update with::

      conda update r-gap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-gap


.. |required_by_r-gap| conda:required_by:: r-gap
.. |downloads_r-gap| image:: https://img.shields.io/conda/dn/bioconda/r-gap.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gap| image:: https://quay.io/repository/biocontainers/r-gap/status
   :target: https://quay.io/repository/biocontainers/r-gap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gap/README.html

