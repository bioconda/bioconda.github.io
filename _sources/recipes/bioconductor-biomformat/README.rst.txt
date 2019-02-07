.. title:: Package Recipe 'bioconductor-biomformat'
.. highlight: bash


bioconductor-biomformat
=======================

.. conda:recipe:: bioconductor-biomformat
   :replaces_section_title:

   This is an R package for interfacing with the BIOM format. This package includes basic tools for reading biom\-format files\, accessing and subsetting data tables from a biom object \(which is more complex than a single table\)\, as well as limited support for writing a biom\-object back to a biom\-format file. The design of this API is intended to match the python API and other tools included with the biom\-format project\, but with a decidedly \"R flavor\" that should be familiar to R users. This includes S4 classes and methods\, as well as extensions of common core functions\/methods.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/biomformat.html
   :license: GPL-2
   :recipe: /`bioconductor-biomformat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat/meta.yaml>`_
   :links: biotools: :biotools:`biomformat`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-biomformat

   |downloads_bioconductor-biomformat| |docker_bioconductor-biomformat|

   :versions: 1.10.0, 1.8.0, 1.6.0, 1.4.0, 1.2.0, 1.0.2

   :depends: :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-jsonlite` >=0.9.16 :conda:package:`r-matrix` >=1.2 :conda:package:`r-plyr` >=1.8 

   :required~by: |required_by_bioconductor-biomformat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biomformat

   and update with::

      conda update bioconductor-biomformat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biomformat


.. |required_by_bioconductor-biomformat| conda:required_by:: bioconductor-biomformat
.. |downloads_bioconductor-biomformat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomformat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biomformat| image:: https://quay.io/repository/biocontainers/bioconductor-biomformat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomformat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomformat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomformat/README.html

