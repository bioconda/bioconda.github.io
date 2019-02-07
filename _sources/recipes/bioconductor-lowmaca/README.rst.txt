.. title:: Package Recipe 'bioconductor-lowmaca'
.. highlight: bash


bioconductor-lowmaca
====================

.. conda:recipe:: bioconductor-lowmaca
   :replaces_section_title:

   The LowMACA package is a simple suite of tools to investigate and analyze the mutation profile of several proteins or pfam domains via consensus alignment. You can conduct an hypothesis driven exploratory analysis using our package simply providing a set of genes or pfam domains of your interest.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LowMACA.html
   :license: GPL-3
   :recipe: /`bioconductor-lowmaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmaca/meta.yaml>`_

   


.. conda:package:: bioconductor-lowmaca

   |downloads_bioconductor-lowmaca| |docker_bioconductor-lowmaca|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-lowmacaannotation` >=0.99.0,<0.100.0 :conda:package:`bioconductor-motifstack` >=1.26.0,<1.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cgdsr`  :conda:package:`r-data.table`  :conda:package:`r-httr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-lowmaca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lowmaca

   and update with::

      conda update bioconductor-lowmaca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lowmaca


.. |required_by_bioconductor-lowmaca| conda:required_by:: bioconductor-lowmaca
.. |downloads_bioconductor-lowmaca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lowmaca.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lowmaca| image:: https://quay.io/repository/biocontainers/bioconductor-lowmaca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lowmaca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lowmaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lowmaca/README.html

