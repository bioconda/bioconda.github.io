:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgautils'
.. highlight: bash

bioconductor-tcgautils
======================

.. conda:recipe:: bioconductor-tcgautils
   :replaces_section_title:

   A suite of helper functions for checking and manipulating TCGA data including data obtained from the curatedTCGAData experiment package. These functions aim to simplify and make working with TCGA data more manageable.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TCGAutils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tcgautils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgautils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgautils/meta.yaml>`_

   


.. conda:package:: bioconductor-tcgautils

   |downloads_bioconductor-tcgautils| |docker_bioconductor-tcgautils|

   :versions: 1.2.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicdatacommons: >=1.6.0,<1.7.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-multiassayexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-raggedexperiment: >=1.6.0,<1.7.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rvest: 
   :depends r-stringr: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgautils

   and update with::

      conda update bioconductor-tcgautils

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgautils:<tag>

   (see `bioconductor-tcgautils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgautils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgautils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgautils
   :alt:   (downloads)
.. |docker_bioconductor-tcgautils| image:: https://quay.io/repository/biocontainers/bioconductor-tcgautils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgautils
.. _`bioconductor-tcgautils/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgautils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgautils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgautils/README.html