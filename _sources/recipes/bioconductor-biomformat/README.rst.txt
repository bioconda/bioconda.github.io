:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomformat'
.. highlight: bash

bioconductor-biomformat
=======================

.. conda:recipe:: bioconductor-biomformat
   :replaces_section_title:

   This is an R package for interfacing with the BIOM format. This package includes basic tools for reading biom\-format files\, accessing and subsetting data tables from a biom object \(which is more complex than a single table\)\, as well as limited support for writing a biom\-object back to a biom\-format file. The design of this API is intended to match the python API and other tools included with the biom\-format project\, but with a decidedly \"R flavor\" that should be familiar to R users. This includes S4 classes and methods\, as well as extensions of common core functions\/methods.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/biomformat.html
   :license: GPL-2
   :recipe: /`bioconductor-biomformat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat/meta.yaml>`_
   :links: biotools: :biotools:`biomformat`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-biomformat

   |downloads_bioconductor-biomformat| |docker_bioconductor-biomformat|

   :versions: 1.12.0-0, 1.10.1-0, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.2.0-0, 1.0.2-1, 1.0.2-0
   
   :depends bioconductor-rhdf5: >=2.28.0,<2.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-jsonlite: >=0.9.16
   :depends r-matrix: >=1.2
   :depends r-plyr: >=1.8
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biomformat

   and update with::

      conda update bioconductor-biomformat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biomformat:<tag>

   (see `bioconductor-biomformat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biomformat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomformat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomformat
   :alt:   (downloads)
.. |docker_bioconductor-biomformat| image:: https://quay.io/repository/biocontainers/bioconductor-biomformat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomformat
.. _`bioconductor-biomformat/tags`: https://quay.io/repository/biocontainers/bioconductor-biomformat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomformat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomformat/README.html