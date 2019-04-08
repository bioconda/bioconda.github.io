:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barcode_splitter'
.. highlight: bash

barcode_splitter
================

.. conda:recipe:: barcode_splitter
   :replaces_section_title:

   Split multiple fastq files by matching barcodes in one or more of the sequence files. Barcodes in the tab\-delimited barcodes.txt file are matched against the beginning \(or end\) of the specified index read\(s\). By default\, barcodes must match exactly\, but \-\-mistmatches can be set higher if desired. Compressed input is read \(from all files\) if the first input file name ends in .gz. Reading of compressed input can be forced with the gzipin option.

   :homepage: https://bitbucket.org/princeton_genomics/barcode_splitter
   :license: GNU
   :recipe: /`barcode_splitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcode_splitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcode_splitter/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.2566616`

   


.. conda:package:: barcode_splitter

   |downloads_barcode_splitter| |docker_barcode_splitter|

   :versions: 0.18.4-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install barcode_splitter

   and update with::

      conda update barcode_splitter

   or use the docker container::

      docker pull quay.io/biocontainers/barcode_splitter:<tag>

   (see `barcode_splitter/tags`_ for valid values for ``<tag>``)


.. |downloads_barcode_splitter| image:: https://img.shields.io/conda/dn/bioconda/barcode_splitter.svg?style=flat
   :alt:   (downloads)
.. |docker_barcode_splitter| image:: https://quay.io/repository/biocontainers/barcode_splitter/status
   :target: https://quay.io/repository/biocontainers/barcode_splitter
.. _`barcode_splitter/tags`: https://quay.io/repository/biocontainers/barcode_splitter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barcode_splitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barcode_splitter/README.html