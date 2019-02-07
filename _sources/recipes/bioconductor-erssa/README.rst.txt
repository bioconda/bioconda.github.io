.. title:: Package Recipe 'bioconductor-erssa'
.. highlight: bash


bioconductor-erssa
==================

.. conda:recipe:: bioconductor-erssa
   :replaces_section_title:

   The ERSSA package takes user supplied RNA\-seq differential expression dataset and calculates the number of differentially expressed genes at varying biological replicate levels. This allows the user to determine\, without relying on any a priori assumptions\, whether sufficient differential detection has been acheived with their RNA\-seq dataset.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ERSSA.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-erssa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erssa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erssa/meta.yaml>`_

   


.. conda:package:: bioconductor-erssa

   |downloads_bioconductor-erssa| |docker_bioconductor-erssa|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2` >=3.0.0 :conda:package:`r-plyr` >=1.8.4 :conda:package:`r-rcolorbrewer` >=1.1-2 

   :required~by: |required_by_bioconductor-erssa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-erssa

   and update with::

      conda update bioconductor-erssa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-erssa


.. |required_by_bioconductor-erssa| conda:required_by:: bioconductor-erssa
.. |downloads_bioconductor-erssa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-erssa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-erssa| image:: https://quay.io/repository/biocontainers/bioconductor-erssa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-erssa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-erssa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-erssa/README.html

