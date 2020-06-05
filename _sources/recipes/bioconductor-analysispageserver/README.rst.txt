:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-analysispageserver'
.. highlight: bash

bioconductor-analysispageserver
===============================

.. conda:recipe:: bioconductor-analysispageserver
   :replaces_section_title:
   :noindex:

   A framework for sharing interactive data and plots from R through the web

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/AnalysisPageServer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-analysispageserver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-analysispageserver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-analysispageserver/meta.yaml>`_

   AnalysisPageServer is a modular system that enables sharing of customizable R analyses via the web.


.. conda:package:: bioconductor-analysispageserver

   |downloads_bioconductor-analysispageserver| |docker_bioconductor-analysispageserver|

   :versions:
      
      

      ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-graph: ``>=1.66.0,<1.67.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-log4r: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-analysispageserver

   and update with::

      conda update bioconductor-analysispageserver

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-analysispageserver:<tag>

   (see `bioconductor-analysispageserver/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-analysispageserver| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-analysispageserver.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-analysispageserver
   :alt:   (downloads)
.. |docker_bioconductor-analysispageserver| image:: https://quay.io/repository/biocontainers/bioconductor-analysispageserver/status
   :target: https://quay.io/repository/biocontainers/bioconductor-analysispageserver
.. _`bioconductor-analysispageserver/tags`: https://quay.io/repository/biocontainers/bioconductor-analysispageserver?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-analysispageserver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-analysispageserver/README.html