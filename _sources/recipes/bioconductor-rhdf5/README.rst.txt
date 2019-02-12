.. title:: Package Recipe 'bioconductor-rhdf5'
.. highlight: bash


bioconductor-rhdf5
==================

.. conda:recipe:: bioconductor-rhdf5
   :replaces_section_title:

   This package provides an interface between HDF5 and R. HDF5\'s main features are the ability to store and access very large and\/or complex datasets and a wide variety of metadata on mass storage \(disk\) through a completely portable file format. The rhdf5 package is thus suited for the exchange of large and\/or complex datasets between R and other software package\, and for letting R applications work on datasets that are larger than the available RAM.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rhdf5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5/meta.yaml>`_
   :links: biotools: :biotools:`rhdf5`

   


.. conda:package:: bioconductor-rhdf5

   |downloads_bioconductor-rhdf5| |docker_bioconductor-rhdf5|

   :versions: 2.26.2, 2.26.1, 2.26.0, 2.24.0, 2.22.0, 2.20.0, 2.16.0, 2.14.0, 2.12.0

   :depends: :conda:package:`bioconductor-rhdf5lib` >=1.4.0,<1.5.0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_bioconductor-rhdf5|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhdf5

   and update with::

      conda update bioconductor-rhdf5

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rhdf5


.. |required_by_bioconductor-rhdf5| conda:required_by:: bioconductor-rhdf5
.. |downloads_bioconductor-rhdf5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5/README.html

