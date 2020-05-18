:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-refnet'
.. highlight: bash

bioconductor-refnet
===================

.. conda:recipe:: bioconductor-refnet
   :replaces_section_title:

   A queryable collection of molecular interactions\, from many sources

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/RefNet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-refnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-refnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-refnet/meta.yaml>`_
   :links: biotools: :biotools:`refnet`, doi: :doi:`10.1038/nmeth.3252`

   Obtain molecular interactions with metadata\, some archived\, some dynamically queried.


.. conda:package:: bioconductor-refnet

   |downloads_bioconductor-refnet| |docker_bioconductor-refnet|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-1, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends bioconductor-annotationhub: >=2.20.0,<2.21.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-psicquic: >=1.25.0,<1.26.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-rcurl: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-refnet

   and update with::

      conda update bioconductor-refnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-refnet:<tag>

   (see `bioconductor-refnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-refnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-refnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-refnet
   :alt:   (downloads)
.. |docker_bioconductor-refnet| image:: https://quay.io/repository/biocontainers/bioconductor-refnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-refnet
.. _`bioconductor-refnet/tags`: https://quay.io/repository/biocontainers/bioconductor-refnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-refnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-refnet/README.html