:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhdf5'
.. highlight: bash

bioconductor-rhdf5
==================

.. conda:recipe:: bioconductor-rhdf5
   :replaces_section_title:

   This package provides an interface between HDF5 and R. HDF5\'s main features are the ability to store and access very large and\/or complex datasets and a wide variety of metadata on mass storage \(disk\) through a completely portable file format. The rhdf5 package is thus suited for the exchange of large and\/or complex datasets between R and other software package\, and for letting R applications work on datasets that are larger than the available RAM.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rhdf5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5/meta.yaml>`_
   :links: biotools: :biotools:`rhdf5`

   


.. conda:package:: bioconductor-rhdf5

   |downloads_bioconductor-rhdf5| |docker_bioconductor-rhdf5|

   :versions: 2.28.0-0, 2.26.2-2, 2.26.2-1, 2.26.2-0, 2.26.1-0, 2.26.0-2, 2.26.0-1, 2.26.0-0, 2.24.0-0, 2.22.0-0, 2.20.0-1, 2.20.0-0, 2.16.0-1, 2.16.0-0, 2.14.0-1, 2.14.0-0, 2.12.0-0
   
   :depends bioconductor-rhdf5lib: >=1.6.0,<1.7.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhdf5

   and update with::

      conda update bioconductor-rhdf5

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhdf5:<tag>

   (see `bioconductor-rhdf5/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhdf5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhdf5
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5
.. _`bioconductor-rhdf5/tags`: https://quay.io/repository/biocontainers/bioconductor-rhdf5?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5/README.html