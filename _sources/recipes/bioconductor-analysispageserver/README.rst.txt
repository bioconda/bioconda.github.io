:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-analysispageserver'
.. highlight: bash

bioconductor-analysispageserver
===============================

.. conda:recipe:: bioconductor-analysispageserver
   :replaces_section_title:

   AnalysisPageServer is a modular system that enables sharing of customizable R analyses via the web.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/AnalysisPageServer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-analysispageserver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-analysispageserver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-analysispageserver/meta.yaml>`_

   


.. conda:package:: bioconductor-analysispageserver

   |downloads_bioconductor-analysispageserver| |docker_bioconductor-analysispageserver|

   :versions: 1.16.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-log4r: 
   
   :depends r-rjson: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-analysispageserver

   and update with::

      conda update bioconductor-analysispageserver

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-analysispageserver:<tag>

   (see `bioconductor-analysispageserver/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-analysispageserver| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-analysispageserver.svg?style=flat
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