:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maigespack'
.. highlight: bash

bioconductor-maigespack
=======================

.. conda:recipe:: bioconductor-maigespack
   :replaces_section_title:

   This package uses functions of various other packages together with other functions in a coordinated way to handle and analyse cDNA microarray data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/maigesPack.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-maigespack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maigespack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maigespack/meta.yaml>`_
   :links: biotools: :biotools:`maigespack`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-maigespack

   |downloads_bioconductor-maigespack| |docker_bioconductor-maigespack|

   :versions: 1.46.0-0, 1.44.0-0, 1.42.0-0
   
   :depends bioconductor-convert: >=1.58.0,<1.59.0
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-marray: >=1.60.0,<1.61.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maigespack

   and update with::

      conda update bioconductor-maigespack

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maigespack:<tag>

   (see `bioconductor-maigespack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maigespack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maigespack.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-maigespack| image:: https://quay.io/repository/biocontainers/bioconductor-maigespack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maigespack
.. _`bioconductor-maigespack/tags`: https://quay.io/repository/biocontainers/bioconductor-maigespack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maigespack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maigespack/README.html