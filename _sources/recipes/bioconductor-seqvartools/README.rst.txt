.. title:: Package Recipe 'bioconductor-seqvartools'
.. highlight: bash


bioconductor-seqvartools
========================

.. conda:recipe:: bioconductor-seqvartools
   :replaces_section_title:

   An interface to the fast\-access storage format for VCF data provided in SeqArray\, with tools for common operations and analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SeqVarTools.html
   :license: GPL-3
   :recipe: /`bioconductor-seqvartools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqvartools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqvartools/meta.yaml>`_

   


.. conda:package:: bioconductor-seqvartools

   |downloads_bioconductor-seqvartools| |docker_bioconductor-seqvartools|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-gdsfmt` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-seqarray` >=1.22.0,<1.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-gwasexacthw`  :conda:package:`r-logistf`  :conda:package:`r-matrix`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-seqvartools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqvartools

   and update with::

      conda update bioconductor-seqvartools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-seqvartools


.. |required_by_bioconductor-seqvartools| conda:required_by:: bioconductor-seqvartools
.. |downloads_bioconductor-seqvartools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqvartools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqvartools| image:: https://quay.io/repository/biocontainers/bioconductor-seqvartools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqvartools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqvartools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqvartools/README.html

