:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtracklayer'
.. highlight: bash

bioconductor-rtracklayer
========================

.. conda:recipe:: bioconductor-rtracklayer
   :replaces_section_title:

   Extensible framework for interacting with genome browsers

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rtracklayer.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-rtracklayer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtracklayer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtracklayer/meta.yaml>`_
   :links: biotools: :biotools:`rtracklayer`

   


.. conda:package:: bioconductor-rtracklayer

   |downloads_bioconductor-rtracklayer| |docker_bioconductor-rtracklayer|

   :versions: 1.46.0-0, 1.44.2-1, 1.44.2-0, 1.44.0-1, 1.42.1-1, 1.42.1-0, 1.40.6-0, 1.38.3-0, 1.38.0-0, 1.36.6-0, 1.34.2-1, 1.34.1-0, 1.32.2-1, 1.30.1-0, 1.30.0-1
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-xvector: >=0.26.0,<0.27.0
   :depends bioconductor-zlibbioc: >=1.32.0,<1.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rcurl: >=1.4-2
   :depends r-xml: >=1.98-0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtracklayer

   and update with::

      conda update bioconductor-rtracklayer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtracklayer:<tag>

   (see `bioconductor-rtracklayer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtracklayer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtracklayer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtracklayer
   :alt:   (downloads)
.. |docker_bioconductor-rtracklayer| image:: https://quay.io/repository/biocontainers/bioconductor-rtracklayer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtracklayer
.. _`bioconductor-rtracklayer/tags`: https://quay.io/repository/biocontainers/bioconductor-rtracklayer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtracklayer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtracklayer/README.html