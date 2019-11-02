:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edda'
.. highlight: bash

bioconductor-edda
=================

.. conda:recipe:: bioconductor-edda
   :replaces_section_title:

   EDDA can aid in the design of a range of common experiments such as RNA\-seq\, Nanostring assays\, RIP\-seq and Metagenomic sequencing\, and enables researchers to comprehensively investigate the impact of experimental decisions on the ability to detect differential abundance. This work was published on 3 December 2014 at Genome Biology under the title \"The importance of study design for detecting differentially abundant features in high\-throughput experiments\" \(http\:\/\/genomebiology.com\/2014\/15\/12\/527\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/EDDA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-edda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edda/meta.yaml>`_
   :links: biotools: :biotools:`edda`, doi: :doi:`10.1186/s13059-014-0527-7`

   


.. conda:package:: bioconductor-edda

   |downloads_bioconductor-edda| |docker_bioconductor-edda|

   :versions: 1.24.0-0, 1.22.0-1, 1.20.1-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-bayseq: >=2.20.0,<2.21.0
   :depends bioconductor-deseq: >=1.38.0,<1.39.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rcpp: >=0.10.4
   :depends r-rocr: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-edda

   and update with::

      conda update bioconductor-edda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-edda:<tag>

   (see `bioconductor-edda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-edda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edda
   :alt:   (downloads)
.. |docker_bioconductor-edda| image:: https://quay.io/repository/biocontainers/bioconductor-edda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edda
.. _`bioconductor-edda/tags`: https://quay.io/repository/biocontainers/bioconductor-edda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edda/README.html