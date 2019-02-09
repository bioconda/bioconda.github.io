.. title:: Package Recipe 'bioconductor-ebarrays'
.. highlight: bash


bioconductor-ebarrays
=====================

.. conda:recipe:: bioconductor-ebarrays
   :replaces_section_title:

   EBarrays provides tools for the analysis of replicated\/unreplicated microarray data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/EBarrays.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ebarrays <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebarrays>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebarrays/meta.yaml>`_
   :links: biotools: :biotools:`ebarrays`, doi: :doi:`10.1111/j.1541-0420.2006.00611.x`

   


.. conda:package:: bioconductor-ebarrays

   |downloads_bioconductor-ebarrays| |docker_bioconductor-ebarrays|

   :versions: 2.46.0, 2.44.0, 2.42.0, 2.40.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-lattice`  

   :required~by: |required_by_bioconductor-ebarrays|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ebarrays

   and update with::

      conda update bioconductor-ebarrays

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ebarrays


.. |required_by_bioconductor-ebarrays| conda:required_by:: bioconductor-ebarrays
.. |downloads_bioconductor-ebarrays| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebarrays.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ebarrays| image:: https://quay.io/repository/biocontainers/bioconductor-ebarrays/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebarrays







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebarrays/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebarrays/README.html

