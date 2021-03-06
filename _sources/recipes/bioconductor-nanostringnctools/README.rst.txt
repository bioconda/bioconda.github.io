:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanostringnctools'
.. highlight: bash

bioconductor-nanostringnctools
==============================

.. conda:recipe:: bioconductor-nanostringnctools
   :replaces_section_title:
   :noindex:

   NanoString nCounter Tools

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/NanoStringNCTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-nanostringnctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringnctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringnctools/meta.yaml>`_

   Tools for NanoString Technologies nCounter Technology. Provides support for reading RCC files into an ExpressionSet derived object.  Also includes methods for QC and normalizaztion of NanoString data.


.. conda:package:: bioconductor-nanostringnctools

   |downloads_bioconductor-nanostringnctools| |docker_bioconductor-nanostringnctools|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggbeeswarm: 
   :depends r-ggiraph: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nanostringnctools

   and update with::

      conda update bioconductor-nanostringnctools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanostringnctools:<tag>

   (see `bioconductor-nanostringnctools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanostringnctools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanostringnctools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanostringnctools
   :alt:   (downloads)
.. |docker_bioconductor-nanostringnctools| image:: https://quay.io/repository/biocontainers/bioconductor-nanostringnctools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanostringnctools
.. _`bioconductor-nanostringnctools/tags`: https://quay.io/repository/biocontainers/bioconductor-nanostringnctools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanostringnctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanostringnctools/README.html