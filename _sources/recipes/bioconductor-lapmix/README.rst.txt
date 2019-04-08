:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lapmix'
.. highlight: bash

bioconductor-lapmix
===================

.. conda:recipe:: bioconductor-lapmix
   :replaces_section_title:

   Laplace mixture modelling of microarray experiments. A hierarchical Bayesian approach is used\, and the hyperparameters are estimated using empirical Bayes. The main purpose is to identify differentially expressed genes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/lapmix.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-lapmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lapmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lapmix/meta.yaml>`_
   :links: biotools: :biotools:`lapmix`, doi: :doi:`10.1093/biostatistics/kxj032`

   


.. conda:package:: bioconductor-lapmix

   |downloads_bioconductor-lapmix| |docker_bioconductor-lapmix|

   :versions: 1.48.0-0, 1.46.0-0, 1.44.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lapmix

   and update with::

      conda update bioconductor-lapmix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lapmix:<tag>

   (see `bioconductor-lapmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lapmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lapmix.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lapmix| image:: https://quay.io/repository/biocontainers/bioconductor-lapmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lapmix
.. _`bioconductor-lapmix/tags`: https://quay.io/repository/biocontainers/bioconductor-lapmix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lapmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lapmix/README.html