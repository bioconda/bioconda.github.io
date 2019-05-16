:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affycomp'
.. highlight: bash

bioconductor-affycomp
=====================

.. conda:recipe:: bioconductor-affycomp
   :replaces_section_title:

   The package contains functions that can be used to compare expression measures for Affymetrix Oligonucleotide Arrays.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/affycomp.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affycomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycomp/meta.yaml>`_
   :links: biotools: :biotools:`affycomp`, doi: :doi:`10.1093/bioinformatics/btg410`

   


.. conda:package:: bioconductor-affycomp

   |downloads_bioconductor-affycomp| |docker_bioconductor-affycomp|

   :versions: 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.52.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affycomp

   and update with::

      conda update bioconductor-affycomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affycomp:<tag>

   (see `bioconductor-affycomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affycomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affycomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affycomp
   :alt:   (downloads)
.. |docker_bioconductor-affycomp| image:: https://quay.io/repository/biocontainers/bioconductor-affycomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affycomp
.. _`bioconductor-affycomp/tags`: https://quay.io/repository/biocontainers/bioconductor-affycomp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affycomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affycomp/README.html