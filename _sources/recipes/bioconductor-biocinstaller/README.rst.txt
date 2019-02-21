:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocinstaller'
.. highlight: bash

bioconductor-biocinstaller
==========================

.. conda:recipe:: bioconductor-biocinstaller
   :replaces_section_title:

   This package is used to install and update Bioconductor\, CRAN\, and \(some\) github packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocInstaller.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocinstaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocinstaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocinstaller/meta.yaml>`_
   :links: biotools: :biotools:`biocinstaller`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-biocinstaller

   |downloads_bioconductor-biocinstaller| |docker_bioconductor-biocinstaller|

   :versions: 1.32.1-0, 1.30.0-0, 1.28.0-1, 1.28.0-0, 1.26.1-0, 1.24.0-0, 1.22.3-0, 1.21.0-0, 1.20.1-0, 1.20.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocinstaller

   and update with::

      conda update bioconductor-biocinstaller

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocinstaller:<tag>

   (see `bioconductor-biocinstaller/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocinstaller| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocinstaller.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocinstaller| image:: https://quay.io/repository/biocontainers/bioconductor-biocinstaller/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocinstaller
.. _`bioconductor-biocinstaller/tags`: https://quay.io/repository/biocontainers/bioconductor-biocinstaller?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocinstaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocinstaller/README.html