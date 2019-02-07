.. title:: Package Recipe 'bioconductor-topgo'
.. highlight: bash


bioconductor-topgo
==================

.. conda:recipe:: bioconductor-topgo
   :replaces_section_title:

   topGO package provides tools for testing GO terms while accounting for the topology of the GO graph. Different test statistics and different methods for eliminating local similarities and dependencies between GO terms can be implemented and applied.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/topGO.html
   :license: LGPL
   :recipe: /`bioconductor-topgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topgo/meta.yaml>`_
   :links: biotools: :biotools:`topgo`, doi: :doi:`10.1093/bioinformatics/btl140`

   


.. conda:package:: bioconductor-topgo

   |downloads_bioconductor-topgo| |docker_bioconductor-topgo|

   :versions: 2.34.0, 2.32.0, 2.30.0, 2.28.0, 2.24.0, 2.22.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-lattice`  :conda:package:`r-matrixstats`  :conda:package:`r-sparsem` >=0.73 

   :required~by: |required_by_bioconductor-topgo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-topgo

   and update with::

      conda update bioconductor-topgo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-topgo


.. |required_by_bioconductor-topgo| conda:required_by:: bioconductor-topgo
.. |downloads_bioconductor-topgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topgo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-topgo| image:: https://quay.io/repository/biocontainers/bioconductor-topgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topgo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topgo/README.html

