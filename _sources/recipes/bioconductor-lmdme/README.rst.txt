.. title:: Package Recipe 'bioconductor-lmdme'
.. highlight: bash


bioconductor-lmdme
==================

.. conda:recipe:: bioconductor-lmdme
   :replaces_section_title:

   linear ANOVA decomposition of Multivariate Designed Experiments implementation based on limma lmFit. Features\: i\)Flexible formula type interface\, ii\) Fast limma based implementation\, iii\) p\-values for each estimated coefficient levels in each factor\, iv\) F values for factor effects and v\) plotting functions for PCA and PLS.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/lmdme.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-lmdme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lmdme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lmdme/meta.yaml>`_
   :links: biotools: :biotools:`lmdme`

   


.. conda:package:: bioconductor-lmdme

   |downloads_bioconductor-lmdme| |docker_bioconductor-lmdme|

   :versions: 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-stemhypoxia` >=1.18.0,<1.19.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-pls`  

   :required~by: |required_by_bioconductor-lmdme|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lmdme

   and update with::

      conda update bioconductor-lmdme

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lmdme


.. |required_by_bioconductor-lmdme| conda:required_by:: bioconductor-lmdme
.. |downloads_bioconductor-lmdme| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lmdme.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lmdme| image:: https://quay.io/repository/biocontainers/bioconductor-lmdme/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lmdme







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lmdme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lmdme/README.html

