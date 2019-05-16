:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swathxtend'
.. highlight: bash

bioconductor-swathxtend
=======================

.. conda:recipe:: bioconductor-swathxtend
   :replaces_section_title:

   Contains utility functions for integrating spectral libraries for SWATH and statistical data analysis for SWATH generated data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SwathXtend.html
   :license: GPL-2
   :recipe: /`bioconductor-swathxtend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend/meta.yaml>`_
   :links: biotools: :biotools:`swathxtend`, doi: :doi:`10.1074/mcp.M115.055558`

   


.. conda:package:: bioconductor-swathxtend

   |downloads_bioconductor-swathxtend| |docker_bioconductor-swathxtend|

   :versions: 2.6.0-0, 2.4.0-0, 2.2.0-0, 2.0.0-0, 1.4.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-e1071: 
   :depends r-lattice: 
   :depends r-openxlsx: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-swathxtend

   and update with::

      conda update bioconductor-swathxtend

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-swathxtend:<tag>

   (see `bioconductor-swathxtend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-swathxtend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swathxtend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swathxtend
   :alt:   (downloads)
.. |docker_bioconductor-swathxtend| image:: https://quay.io/repository/biocontainers/bioconductor-swathxtend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swathxtend
.. _`bioconductor-swathxtend/tags`: https://quay.io/repository/biocontainers/bioconductor-swathxtend?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html