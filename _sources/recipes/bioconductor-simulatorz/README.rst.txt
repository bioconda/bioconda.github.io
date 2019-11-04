:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simulatorz'
.. highlight: bash

bioconductor-simulatorz
=======================

.. conda:recipe:: bioconductor-simulatorz
   :replaces_section_title:

   simulatorZ is a package intended primarily to simulate collections of independent genomic data sets\, as well as performing training and validation with predicting algorithms. It supports ExpressionSet and RangedSummarizedExperiment objects.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/simulatorZ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-simulatorz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simulatorz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simulatorz/meta.yaml>`_

   


.. conda:package:: bioconductor-simulatorz

   |downloads_bioconductor-simulatorz| |docker_bioconductor-simulatorz|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-coxboost: 
   :depends r-gbm: 
   :depends r-hmisc: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simulatorz

   and update with::

      conda update bioconductor-simulatorz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simulatorz:<tag>

   (see `bioconductor-simulatorz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simulatorz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simulatorz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simulatorz
   :alt:   (downloads)
.. |docker_bioconductor-simulatorz| image:: https://quay.io/repository/biocontainers/bioconductor-simulatorz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simulatorz
.. _`bioconductor-simulatorz/tags`: https://quay.io/repository/biocontainers/bioconductor-simulatorz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simulatorz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simulatorz/README.html