:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microrna'
.. highlight: bash

bioconductor-microrna
=====================

.. conda:recipe:: bioconductor-microrna
   :replaces_section_title:

   Data and functions for dealing with microRNAs

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/microRNA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-microrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microrna/meta.yaml>`_
   :links: biotools: :biotools:`microrna`, doi: :doi:`10.1038/nmeth.3252`

   Different data resources for microRNAs and some functions for manipulating them.


.. conda:package:: bioconductor-microrna

   |downloads_bioconductor-microrna| |docker_bioconductor-microrna|

   :versions: 1.44.0-0, 1.42.0-1, 1.40.0-0, 1.38.0-0, 1.36.0-0, 1.34.0-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microrna

   and update with::

      conda update bioconductor-microrna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microrna:<tag>

   (see `bioconductor-microrna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microrna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microrna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microrna
   :alt:   (downloads)
.. |docker_bioconductor-microrna| image:: https://quay.io/repository/biocontainers/bioconductor-microrna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microrna
.. _`bioconductor-microrna/tags`: https://quay.io/repository/biocontainers/bioconductor-microrna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microrna/README.html