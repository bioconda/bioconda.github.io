:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sabre'
.. highlight: bash

sabre
=====

.. conda:recipe:: sabre
   :replaces_section_title:
   :noindex:

   A barcode demultiplexing and trimming tool for FastQ files

   :homepage: https://github.com/najoshi/sabre/
   :license: MIT
   :recipe: /`sabre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sabre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sabre/meta.yaml>`_

   Next\-generation sequencing can currently produce hundreds of millions of
   reads per lane of sample and that number increases at a dizzying rate.
   Barcoding individual sequences for multiple lines or multiple species is a
   cost\-efficient method to sequence and analyze a broad range of data. Sabre
   is a tool that will demultiplex barcoded reads into separate files. It
   will work on both single\-end and paired\-end data in fastq format. It
   simply compares the provided barcodes with each read and separates the
   read into its appropriate barcode file\, after stripping the barcode from
   the read \(and also stripping the quality values of the barcode bases\). If
   a read does not have a recognized barcode\, then it is put into the unknown
   file. Sabre also has an option \(\-m\) to allow mismatches of the barcodes.
   Sabre also supports gzipped file inputs. Also\, since sabre does not use
   the quality values in any way\, it can be used on fasta data that is
   converted to fastq by creating fake quality values. Finally\, after
   demultiplexing\, sabre outputs a summary of how many records went into each
   barcode file.


.. conda:package:: sabre

   |downloads_sabre| |docker_sabre|

   :versions:
      
      

      ``1.000-2``,  ``1.000-1``,  ``1.000-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sabre

   and update with::

      conda update sabre

   or use the docker container::

      docker pull quay.io/biocontainers/sabre:<tag>

   (see `sabre/tags`_ for valid values for ``<tag>``)


.. |downloads_sabre| image:: https://img.shields.io/conda/dn/bioconda/sabre.svg?style=flat
   :target: https://anaconda.org/bioconda/sabre
   :alt:   (downloads)
.. |docker_sabre| image:: https://quay.io/repository/biocontainers/sabre/status
   :target: https://quay.io/repository/biocontainers/sabre
.. _`sabre/tags`: https://quay.io/repository/biocontainers/sabre?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sabre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sabre/README.html