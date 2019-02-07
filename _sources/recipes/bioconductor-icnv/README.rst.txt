.. title:: Package Recipe 'bioconductor-icnv'
.. highlight: bash


bioconductor-icnv
=================

.. conda:recipe:: bioconductor-icnv
   :replaces_section_title:

   Integrative copy number variation \(CNV\) detection from multiple platform and experimental design.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iCNV.html
   :license: GPL-2
   :recipe: /`bioconductor-icnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icnv/meta.yaml>`_

   


.. conda:package:: bioconductor-icnv

   |downloads_bioconductor-icnv| |docker_bioconductor-icnv|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-codex` >=1.14.0,<1.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-fields`  :conda:package:`r-ggplot2`  :conda:package:`r-rlang`  :conda:package:`r-tidyr`  :conda:package:`r-truncnorm`  

   :required~by: |required_by_bioconductor-icnv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-icnv

   and update with::

      conda update bioconductor-icnv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-icnv


.. |required_by_bioconductor-icnv| conda:required_by:: bioconductor-icnv
.. |downloads_bioconductor-icnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icnv.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-icnv| image:: https://quay.io/repository/biocontainers/bioconductor-icnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icnv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icnv/README.html

