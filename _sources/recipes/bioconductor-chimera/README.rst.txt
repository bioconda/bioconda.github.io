:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chimera'
.. highlight: bash

bioconductor-chimera
====================

.. conda:recipe:: bioconductor-chimera
   :replaces_section_title:

   This package facilitates the characterisation of fusion products events. It allows to import fusion data results from the following fusion finders\: chimeraScan\, bellerophontes\, deFuse\, FusionFinder\, FusionHunter\, mapSplice\, tophat\-fusion\, FusionMap\, STAR\, Rsubread\, fusionCatcher.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/chimera.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chimera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimera/meta.yaml>`_

   


.. conda:package:: bioconductor-chimera

   |downloads_bioconductor-chimera| |docker_bioconductor-chimera|

   :versions: 1.26.0-1, 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.5.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-homo.sapiens: >=1.3.0,<1.4.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: >=3.2.0,<3.3.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chimera

   and update with::

      conda update bioconductor-chimera

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chimera:<tag>

   (see `bioconductor-chimera/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chimera| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chimera.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chimera
   :alt:   (downloads)
.. |docker_bioconductor-chimera| image:: https://quay.io/repository/biocontainers/bioconductor-chimera/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chimera
.. _`bioconductor-chimera/tags`: https://quay.io/repository/biocontainers/bioconductor-chimera?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chimera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chimera/README.html