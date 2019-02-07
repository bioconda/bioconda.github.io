.. title:: Package Recipe 'bioconductor-swathxtend'
.. highlight: bash


bioconductor-swathxtend
=======================

.. conda:recipe:: bioconductor-swathxtend
   :replaces_section_title:

   Contains utility functions for integrating spectral libraries for SWATH and statistical data analysis for SWATH generated data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SwathXtend.html
   :license: GPL-2
   :recipe: /`bioconductor-swathxtend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend/meta.yaml>`_
   :links: biotools: :biotools:`swathxtend`, doi: :doi:`10.1074/mcp.M115.055558`

   


.. conda:package:: bioconductor-swathxtend

   |downloads_bioconductor-swathxtend| |docker_bioconductor-swathxtend|

   :versions: 2.4.0, 2.2.0, 2.0.0, 1.4.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  :conda:package:`r-lattice`  :conda:package:`r-openxlsx`  :conda:package:`r-venndiagram`  

   :required~by: |required_by_bioconductor-swathxtend|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-swathxtend

   and update with::

      conda update bioconductor-swathxtend

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-swathxtend


.. |required_by_bioconductor-swathxtend| conda:required_by:: bioconductor-swathxtend
.. |downloads_bioconductor-swathxtend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swathxtend.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-swathxtend| image:: https://quay.io/repository/biocontainers/bioconductor-swathxtend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swathxtend







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html

