.. title:: Package Recipe 'bioconductor-hilbertvis'
.. highlight: bash


bioconductor-hilbertvis
=======================

.. conda:recipe:: bioconductor-hilbertvis
   :replaces_section_title:

   Functions to visualize long vectors of integer data by means of Hilbert curves

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HilbertVis.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-hilbertvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertvis/meta.yaml>`_
   :links: biotools: :biotools:`hilbertvis`, doi: :doi:`10.1093/bioinformatics/btp152`

   


.. conda:package:: bioconductor-hilbertvis

   |downloads_bioconductor-hilbertvis| |docker_bioconductor-hilbertvis|

   :versions: 1.40.0, 1.38.0, 1.36.0, 1.34.0, 1.32.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  

   :required~by: |required_by_bioconductor-hilbertvis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hilbertvis

   and update with::

      conda update bioconductor-hilbertvis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hilbertvis


.. |required_by_bioconductor-hilbertvis| conda:required_by:: bioconductor-hilbertvis
.. |downloads_bioconductor-hilbertvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilbertvis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hilbertvis| image:: https://quay.io/repository/biocontainers/bioconductor-hilbertvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilbertvis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilbertvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilbertvis/README.html

