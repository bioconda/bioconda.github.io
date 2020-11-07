:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oct4'
.. highlight: bash

bioconductor-oct4
=================

.. conda:recipe:: bioconductor-oct4
   :replaces_section_title:
   :noindex:

   Conditional knockdown of OCT4 in mouse ESCs

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/oct4.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-oct4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oct4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oct4/meta.yaml>`_

   This package provides the output of running Salmon on a set of 12 RNA\-seq samples from King \& Klose\, \"The pioneer factor OCT4 requires the chromatin remodeller BRG1 to support gene regulatory element function in mouse embryonic stem cells\"\, published in eLIFE\, March 2017. For details on version numbers and how the samples were processed see the package vignette.


.. conda:package:: bioconductor-oct4

   |downloads_bioconductor-oct4| |docker_bioconductor-oct4|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oct4

   and update with::

      conda update bioconductor-oct4

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oct4:<tag>

   (see `bioconductor-oct4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oct4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oct4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oct4
   :alt:   (downloads)
.. |docker_bioconductor-oct4| image:: https://quay.io/repository/biocontainers/bioconductor-oct4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oct4
.. _`bioconductor-oct4/tags`: https://quay.io/repository/biocontainers/bioconductor-oct4?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oct4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oct4/README.html