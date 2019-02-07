.. title:: Package Recipe 'bioconductor-ssviz'
.. highlight: bash


bioconductor-ssviz
==================

.. conda:recipe:: bioconductor-ssviz
   :replaces_section_title:

   Small RNA sequencing viewer

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ssviz.html
   :license: GPL-2
   :recipe: /`bioconductor-ssviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssviz/meta.yaml>`_
   :links: biotools: :biotools:`ssviz`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-ssviz

   |downloads_bioconductor-ssviz| |docker_bioconductor-ssviz|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape`  

   :required~by: |required_by_bioconductor-ssviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ssviz

   and update with::

      conda update bioconductor-ssviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ssviz


.. |required_by_bioconductor-ssviz| conda:required_by:: bioconductor-ssviz
.. |downloads_bioconductor-ssviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ssviz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ssviz| image:: https://quay.io/repository/biocontainers/bioconductor-ssviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ssviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ssviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ssviz/README.html

