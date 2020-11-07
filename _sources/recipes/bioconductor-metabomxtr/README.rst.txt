:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabomxtr'
.. highlight: bash

bioconductor-metabomxtr
=======================

.. conda:recipe:: bioconductor-metabomxtr
   :replaces_section_title:
   :noindex:

   A package to run mixture models for truncated metabolomics data with normal or lognormal distributions

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/metabomxtr.html
   :license: GPL-2
   :recipe: /`bioconductor-metabomxtr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabomxtr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabomxtr/meta.yaml>`_

   The functions in this package return optimized parameter estimates and log likelihoods for mixture models of truncated data with normal or lognormal distributions.


.. conda:package:: bioconductor-metabomxtr

   |downloads_bioconductor-metabomxtr| |docker_bioconductor-metabomxtr|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-multtest: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-formula: 
   :depends r-ggplot2: 
   :depends r-optimx: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metabomxtr

   and update with::

      conda update bioconductor-metabomxtr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabomxtr:<tag>

   (see `bioconductor-metabomxtr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabomxtr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabomxtr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabomxtr
   :alt:   (downloads)
.. |docker_bioconductor-metabomxtr| image:: https://quay.io/repository/biocontainers/bioconductor-metabomxtr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabomxtr
.. _`bioconductor-metabomxtr/tags`: https://quay.io/repository/biocontainers/bioconductor-metabomxtr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabomxtr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabomxtr/README.html