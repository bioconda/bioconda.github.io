:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-greylistchip'
.. highlight: bash

bioconductor-greylistchip
=========================

.. conda:recipe:: bioconductor-greylistchip
   :replaces_section_title:

   Identify regions of ChIP experiments with high signal in the input\, that lead to spurious peaks during peak calling. Remove reads aligning to these regions prior to peak calling\, for cleaner ChIP analysis.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GreyListChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-greylistchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-greylistchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-greylistchip/meta.yaml>`_

   


.. conda:package:: bioconductor-greylistchip

   |downloads_bioconductor-greylistchip| |docker_bioconductor-greylistchip|

   :versions: 1.14.0-0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-greylistchip

   and update with::

      conda update bioconductor-greylistchip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-greylistchip:<tag>

   (see `bioconductor-greylistchip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-greylistchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-greylistchip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-greylistchip
   :alt:   (downloads)
.. |docker_bioconductor-greylistchip| image:: https://quay.io/repository/biocontainers/bioconductor-greylistchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-greylistchip
.. _`bioconductor-greylistchip/tags`: https://quay.io/repository/biocontainers/bioconductor-greylistchip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-greylistchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-greylistchip/README.html