:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regparallel'
.. highlight: bash

bioconductor-regparallel
========================

.. conda:recipe:: bioconductor-regparallel
   :replaces_section_title:
   :noindex:

   Standard regression functions in R enabled for parallel processing over large data\-frames

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/RegParallel.html
   :license: GPL-3
   :recipe: /`bioconductor-regparallel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regparallel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regparallel/meta.yaml>`_

   In many analyses\, a large amount of variables have to be tested independently against the trait\/endpoint of interest\, and also adjusted for covariates and confounding factors at the same time. The major bottleneck in these is the amount of time that it takes to complete these analyses. With RegParallel\, a large number of tests can be performed simultaneously. On a 12\-core system\, 144 variables can be tested simultaneously\, with 1000s of variables processed in a matter of seconds via \'nested\' parallel processing. Works for logistic regression\, linear regression\, conditional logistic regression\, Cox proportional hazards and survival models\, and Bayesian logistic regression.


.. conda:package:: bioconductor-regparallel

   |downloads_bioconductor-regparallel| |docker_bioconductor-regparallel|

   :versions:
      
      

      ``1.7.6-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-arm: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-stringr: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-regparallel

   and update with::

      conda update bioconductor-regparallel

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regparallel:<tag>

   (see `bioconductor-regparallel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regparallel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regparallel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regparallel
   :alt:   (downloads)
.. |docker_bioconductor-regparallel| image:: https://quay.io/repository/biocontainers/bioconductor-regparallel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regparallel
.. _`bioconductor-regparallel/tags`: https://quay.io/repository/biocontainers/bioconductor-regparallel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regparallel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regparallel/README.html