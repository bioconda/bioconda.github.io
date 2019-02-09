.. title:: Package Recipe 'bioconductor-splicesites'
.. highlight: bash


bioconductor-splicesites
========================

.. conda:recipe:: bioconductor-splicesites
   :replaces_section_title:

   Performs splice centered analysis on RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/spliceSites.html
   :license: GPL-2
   :recipe: /`bioconductor-splicesites <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicesites>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicesites/meta.yaml>`_

   


.. conda:package:: bioconductor-splicesites

   |downloads_bioconductor-splicesites| |docker_bioconductor-splicesites|

   :versions: 1.30.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-seqlogo` >=1.48.0,<1.49.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doby`  :conda:package:`r-rbamtools` >=2.14.3 :conda:package:`r-refgenome` >=1.6.0 

   :required~by: |required_by_bioconductor-splicesites|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splicesites

   and update with::

      conda update bioconductor-splicesites

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-splicesites


.. |required_by_bioconductor-splicesites| conda:required_by:: bioconductor-splicesites
.. |downloads_bioconductor-splicesites| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicesites.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-splicesites| image:: https://quay.io/repository/biocontainers/bioconductor-splicesites/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicesites







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicesites/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicesites/README.html

