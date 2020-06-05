:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-impulsede'
.. highlight: bash

bioconductor-impulsede
======================

.. conda:recipe:: bioconductor-impulsede
   :replaces_section_title:
   :noindex:

   Detection of DE genes in time series data using impulse models

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ImpulseDE.html
   :license: GPL-3
   :recipe: /`bioconductor-impulsede <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impulsede>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impulsede/meta.yaml>`_
   :links: biotools: :biotools:`impulsede`, doi: :doi:`10.1093/bioinformatics/btw665`

   ImpulseDE is suited to capture single impulse\-like patterns in high throughput time series datasets. By fitting a representative impulse model to each gene\, it reports differentially expressed genes whether across time points in a single experiment or between two time courses from two experiments. To optimize the running time\, the code makes use of clustering steps and multi\-threading.


.. conda:package:: bioconductor-impulsede

   |downloads_bioconductor-impulsede| |docker_bioconductor-impulsede|

   :versions:
      
      

      ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends r-amap: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-boot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-impulsede

   and update with::

      conda update bioconductor-impulsede

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-impulsede:<tag>

   (see `bioconductor-impulsede/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-impulsede| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-impulsede.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-impulsede
   :alt:   (downloads)
.. |docker_bioconductor-impulsede| image:: https://quay.io/repository/biocontainers/bioconductor-impulsede/status
   :target: https://quay.io/repository/biocontainers/bioconductor-impulsede
.. _`bioconductor-impulsede/tags`: https://quay.io/repository/biocontainers/bioconductor-impulsede?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-impulsede/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-impulsede/README.html