.. title:: Package Recipe 'bioconductor-cellgrowth'
.. highlight: bash


bioconductor-cellgrowth
=======================

.. conda:recipe:: bioconductor-cellgrowth
   :replaces_section_title:

   This package provides functionalities for the fitting of cell population growth models on experimental OD curves.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cellGrowth.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellgrowth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellgrowth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellgrowth/meta.yaml>`_
   :links: biotools: :biotools:`cellgrowth`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-cellgrowth

   |downloads_bioconductor-cellgrowth| |docker_bioconductor-cellgrowth|

   :versions: 1.26.1, 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-locfit` >=1.5-4 

   :required~by: |required_by_bioconductor-cellgrowth|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellgrowth

   and update with::

      conda update bioconductor-cellgrowth

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cellgrowth


.. |required_by_bioconductor-cellgrowth| conda:required_by:: bioconductor-cellgrowth
.. |downloads_bioconductor-cellgrowth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellgrowth.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cellgrowth| image:: https://quay.io/repository/biocontainers/bioconductor-cellgrowth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellgrowth







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellgrowth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellgrowth/README.html

