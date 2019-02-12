:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cma'
.. highlight: bash

bioconductor-cma
================

.. conda:recipe:: bioconductor-cma
   :replaces_section_title:

   This package provides a comprehensive collection of various microarray\-based classification algorithms both from Machine Learning and Statistics. Variable Selection\, Hyperparameter tuning\, Evaluation and Comparison can be performed combined or stepwise in a user\-friendly environment.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CMA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cma/meta.yaml>`_
   :links: biotools: :biotools:`cma`, doi: :doi:`10.1186/1471-2105-9-439`

   


.. conda:package:: bioconductor-cma

   |downloads_bioconductor-cma| |docker_bioconductor-cma|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cma

   and update with::

      conda update bioconductor-cma

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cma:<tag>

   (see `bioconductor-cma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cma.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cma| image:: https://quay.io/repository/biocontainers/bioconductor-cma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cma
.. _`bioconductor-cma/tags`: https://quay.io/repository/biocontainers/bioconductor-cma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cma/README.html