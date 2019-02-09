.. title:: Package Recipe 'bioconductor-tssi'
.. highlight: bash


bioconductor-tssi
=================

.. conda:recipe:: bioconductor-tssi
   :replaces_section_title:

   Identify and normalize transcription start sites in high\-throughput sequencing data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TSSi.html
   :license: GPL-3
   :recipe: /`bioconductor-tssi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tssi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tssi/meta.yaml>`_
   :links: biotools: :biotools:`tssi`, doi: :doi:`10.1093/bioinformatics/bts189`

   


.. conda:package:: bioconductor-tssi

   |downloads_bioconductor-tssi| |docker_bioconductor-tssi|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hmisc`  :conda:package:`r-minqa`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-tssi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tssi

   and update with::

      conda update bioconductor-tssi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tssi


.. |required_by_bioconductor-tssi| conda:required_by:: bioconductor-tssi
.. |downloads_bioconductor-tssi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tssi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tssi| image:: https://quay.io/repository/biocontainers/bioconductor-tssi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tssi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tssi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tssi/README.html

