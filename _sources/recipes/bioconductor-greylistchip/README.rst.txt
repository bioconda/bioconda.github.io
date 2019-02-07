.. title:: Package Recipe 'bioconductor-greylistchip'
.. highlight: bash


bioconductor-greylistchip
=========================

.. conda:recipe:: bioconductor-greylistchip
   :replaces_section_title:

   Identify regions of ChIP experiments with high signal in the input\, that lead to spurious peaks during peak calling. Remove reads aligning to these regions prior to peak calling\, for cleaner ChIP analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GreyListChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-greylistchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-greylistchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-greylistchip/meta.yaml>`_

   


.. conda:package:: bioconductor-greylistchip

   |downloads_bioconductor-greylistchip| |docker_bioconductor-greylistchip|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-greylistchip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-greylistchip

   and update with::

      conda update bioconductor-greylistchip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-greylistchip


.. |required_by_bioconductor-greylistchip| conda:required_by:: bioconductor-greylistchip
.. |downloads_bioconductor-greylistchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-greylistchip.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-greylistchip| image:: https://quay.io/repository/biocontainers/bioconductor-greylistchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-greylistchip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-greylistchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-greylistchip/README.html

