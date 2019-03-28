:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bufferedmatrixmethods'
.. highlight: bash

bioconductor-bufferedmatrixmethods
==================================

.. conda:recipe:: bioconductor-bufferedmatrixmethods
   :replaces_section_title:

   Microarray analysis methods that use BufferedMatrix objects

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BufferedMatrixMethods.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bufferedmatrixmethods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bufferedmatrixmethods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bufferedmatrixmethods/meta.yaml>`_
   :links: biotools: :biotools:`bufferedmatrixmethods`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-bufferedmatrixmethods

   |downloads_bioconductor-bufferedmatrixmethods| |docker_bioconductor-bufferedmatrixmethods|

   :versions: 1.46.0-0, 1.44.0-0, 1.42.0-0
   
   :depends bioconductor-bufferedmatrix: >=1.46.0,<1.47.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bufferedmatrixmethods

   and update with::

      conda update bioconductor-bufferedmatrixmethods

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bufferedmatrixmethods:<tag>

   (see `bioconductor-bufferedmatrixmethods/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bufferedmatrixmethods| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bufferedmatrixmethods.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bufferedmatrixmethods| image:: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods
.. _`bioconductor-bufferedmatrixmethods/tags`: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bufferedmatrixmethods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bufferedmatrixmethods/README.html