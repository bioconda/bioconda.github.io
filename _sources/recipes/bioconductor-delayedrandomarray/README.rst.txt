:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayedrandomarray'
.. highlight: bash

bioconductor-delayedrandomarray
===============================

.. conda:recipe:: bioconductor-delayedrandomarray
   :replaces_section_title:
   :noindex:

   Delayed Arrays of Random Values

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/DelayedRandomArray.html
   :license: GPL-3
   :recipe: /`bioconductor-delayedrandomarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedrandomarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedrandomarray/meta.yaml>`_

   Implements a DelayedArray of random values where the realization of the sampled values is delayed until they are needed. Reproducible sampling within any subarray is achieved by chunking where each chunk is initialized with a different random seed and stream. The usual distributions in the stats package are supported\, along with scalar\, vector and arrays for the parameters.


.. conda:package:: bioconductor-delayedrandomarray

   |downloads_bioconductor-delayedrandomarray| |docker_bioconductor-delayedrandomarray|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bh: 
   :depends r-dqrng: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-delayedrandomarray

   and update with::

      conda update bioconductor-delayedrandomarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-delayedrandomarray:<tag>

   (see `bioconductor-delayedrandomarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-delayedrandomarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayedrandomarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayedrandomarray
   :alt:   (downloads)
.. |docker_bioconductor-delayedrandomarray| image:: https://quay.io/repository/biocontainers/bioconductor-delayedrandomarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayedrandomarray
.. _`bioconductor-delayedrandomarray/tags`: https://quay.io/repository/biocontainers/bioconductor-delayedrandomarray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayedrandomarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayedrandomarray/README.html