:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stepnorm'
.. highlight: bash

bioconductor-stepnorm
=====================

.. conda:recipe:: bioconductor-stepnorm
   :replaces_section_title:

   Stepwise normalization functions for cDNA microarrays

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/stepNorm.html
   :license: LGPL
   :recipe: /`bioconductor-stepnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stepnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stepnorm/meta.yaml>`_
   :links: biotools: :biotools:`stepnorm`, doi: :doi:`10.1109/IEMBS.2004.1403830`

   Stepwise normalization functions for cDNA microarray data.


.. conda:package:: bioconductor-stepnorm

   |downloads_bioconductor-stepnorm| |docker_bioconductor-stepnorm|

   :versions: 1.58.0-0, 1.56.0-1, 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.0-0, 1.48.0-0
   
   :depends bioconductor-marray: >=1.64.0,<1.65.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stepnorm

   and update with::

      conda update bioconductor-stepnorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stepnorm:<tag>

   (see `bioconductor-stepnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stepnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stepnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stepnorm
   :alt:   (downloads)
.. |docker_bioconductor-stepnorm| image:: https://quay.io/repository/biocontainers/bioconductor-stepnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stepnorm
.. _`bioconductor-stepnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-stepnorm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stepnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stepnorm/README.html