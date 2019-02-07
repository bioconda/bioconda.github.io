.. title:: Package Recipe 'bioconductor-copyhelper'
.. highlight: bash


bioconductor-copyhelper
=======================

.. conda:recipe:: bioconductor-copyhelper
   :replaces_section_title:

   This package contains the helper files that are required to run the Bioconductor package CopywriteR. It contains pre\-assembled 1kb bin GC\-content and mappability files for the reference genomes hg18\, hg19\, hg38\, mm9 and mm10. In addition\, it contains a blacklist filter to remove regions that display CNV. Files are stored as GRanges objects from the GenomicRanges Bioconductor package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/CopyhelpeR.html
   :license: GPL-2
   :recipe: /`bioconductor-copyhelper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyhelper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyhelper/meta.yaml>`_

   


.. conda:package:: bioconductor-copyhelper

   |downloads_bioconductor-copyhelper| |docker_bioconductor-copyhelper|

   :versions: 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-copyhelper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-copyhelper

   and update with::

      conda update bioconductor-copyhelper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-copyhelper


.. |required_by_bioconductor-copyhelper| conda:required_by:: bioconductor-copyhelper
.. |downloads_bioconductor-copyhelper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copyhelper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-copyhelper| image:: https://quay.io/repository/biocontainers/bioconductor-copyhelper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copyhelper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copyhelper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copyhelper/README.html

