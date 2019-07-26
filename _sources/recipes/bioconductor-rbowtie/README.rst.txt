:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbowtie'
.. highlight: bash

bioconductor-rbowtie
====================

.. conda:recipe:: bioconductor-rbowtie
   :replaces_section_title:

   This package provides an R wrapper around the popular bowtie short read aligner and around SpliceMap\, a de novo splice junction discovery and alignment tool. The package is used by the QuasR bioconductor package. We recommend to use the QuasR package instead of using Rbowtie directly.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Rbowtie.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-rbowtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie/meta.yaml>`_
   :links: biotools: :biotools:`rbowtie`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rbowtie

   |downloads_bioconductor-rbowtie| |docker_bioconductor-rbowtie|

   :versions: 1.24.0-1, 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbowtie

   and update with::

      conda update bioconductor-rbowtie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbowtie:<tag>

   (see `bioconductor-rbowtie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbowtie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbowtie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbowtie
   :alt:   (downloads)
.. |docker_bioconductor-rbowtie| image:: https://quay.io/repository/biocontainers/bioconductor-rbowtie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbowtie
.. _`bioconductor-rbowtie/tags`: https://quay.io/repository/biocontainers/bioconductor-rbowtie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbowtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbowtie/README.html