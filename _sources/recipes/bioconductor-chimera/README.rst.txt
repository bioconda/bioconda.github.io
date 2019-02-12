.. title:: Package Recipe 'bioconductor-chimera'
.. highlight: bash


bioconductor-chimera
====================

.. conda:recipe:: bioconductor-chimera
   :replaces_section_title:

   This package facilitates the characterisation of fusion products events. It allows to import fusion data results from the following fusion finders\: chimeraScan\, bellerophontes\, deFuse\, FusionFinder\, FusionHunter\, mapSplice\, tophat\-fusion\, FusionMap\, STAR\, Rsubread\, fusionCatcher.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/chimera.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chimera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimera/meta.yaml>`_

   


.. conda:package:: bioconductor-chimera

   |downloads_bioconductor-chimera| |docker_bioconductor-chimera|

   :versions: 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg19` >=1.4.0,<1.5.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-homo.sapiens` >=1.3.0,<1.4.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg19.knowngene` >=3.2.0,<3.3.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-chimera|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chimera

   and update with::

      conda update bioconductor-chimera

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chimera


.. |required_by_bioconductor-chimera| conda:required_by:: bioconductor-chimera
.. |downloads_bioconductor-chimera| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chimera.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chimera| image:: https://quay.io/repository/biocontainers/bioconductor-chimera/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chimera







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chimera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chimera/README.html

