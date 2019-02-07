.. title:: Package Recipe 'bioconductor-immunespacer'
.. highlight: bash


bioconductor-immunespacer
=========================

.. conda:recipe:: bioconductor-immunespacer
   :replaces_section_title:

   Provides a convenient API for accessing data sets within ImmuneSpace \(www.immunespace.org\)\, the data repository and analysis platform of the Human Immunology Project Consortium \(HIPC\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ImmuneSpaceR.html
   :license: GPL-2
   :recipe: /`bioconductor-immunespacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunespacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunespacer/meta.yaml>`_

   


.. conda:package:: bioconductor-immunespacer

   |downloads_bioconductor-immunespacer| |docker_bioconductor-immunespacer|

   :versions: 1.10.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-curl`  :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-gtools`  :conda:package:`r-heatmaply` >=0.7.0 :conda:package:`r-httr`  :conda:package:`r-pheatmap`  :conda:package:`r-plotly`  :conda:package:`r-r6`  :conda:package:`r-reshape2`  :conda:package:`r-rjson`  :conda:package:`r-rlabkey` >=2.1.136 :conda:package:`r-rmarkdown`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-immunespacer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-immunespacer

   and update with::

      conda update bioconductor-immunespacer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-immunespacer


.. |required_by_bioconductor-immunespacer| conda:required_by:: bioconductor-immunespacer
.. |downloads_bioconductor-immunespacer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunespacer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-immunespacer| image:: https://quay.io/repository/biocontainers/bioconductor-immunespacer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunespacer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunespacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunespacer/README.html

