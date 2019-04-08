:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipac'
.. highlight: bash

bioconductor-ipac
=================

.. conda:recipe:: bioconductor-ipac
   :replaces_section_title:

   iPAC is a novel tool to identify somatic amino acid mutation clustering within proteins while taking into account protein structure.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iPAC.html
   :license: GPL-2
   :recipe: /`bioconductor-ipac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipac/meta.yaml>`_
   :links: biotools: :biotools:`ipac`, doi: :doi:`10.1186/1471-2105-14-190`

   


.. conda:package:: bioconductor-ipac

   |downloads_bioconductor-ipac| |docker_bioconductor-ipac|

   :versions: 1.26.0-1, 1.26.0-0, 1.24.2-0, 1.22.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gdata: 
   :depends r-scatterplot3d: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ipac

   and update with::

      conda update bioconductor-ipac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ipac:<tag>

   (see `bioconductor-ipac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ipac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipac.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ipac| image:: https://quay.io/repository/biocontainers/bioconductor-ipac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipac
.. _`bioconductor-ipac/tags`: https://quay.io/repository/biocontainers/bioconductor-ipac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipac/README.html