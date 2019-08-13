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

   :versions: 1.16.0-1, 1.14.0-0
   
   :depends bioconductor-bsgenome: >=1.52.0,<1.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
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