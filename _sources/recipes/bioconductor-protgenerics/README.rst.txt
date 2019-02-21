:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-protgenerics'
.. highlight: bash

bioconductor-protgenerics
=========================

.. conda:recipe:: bioconductor-protgenerics
   :replaces_section_title:

   S4 generic functions needed by Bioconductor proteomics packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ProtGenerics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-protgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-protgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-protgenerics/meta.yaml>`_
   :links: biotools: :biotools:`protgenerics`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-protgenerics

   |downloads_bioconductor-protgenerics| |docker_bioconductor-protgenerics|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-1, 1.10.0-0, 1.8.0-0, 1.4.0-1, 1.4.0-0, 1.2.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-protgenerics

   and update with::

      conda update bioconductor-protgenerics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-protgenerics:<tag>

   (see `bioconductor-protgenerics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-protgenerics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-protgenerics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-protgenerics| image:: https://quay.io/repository/biocontainers/bioconductor-protgenerics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-protgenerics
.. _`bioconductor-protgenerics/tags`: https://quay.io/repository/biocontainers/bioconductor-protgenerics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-protgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-protgenerics/README.html