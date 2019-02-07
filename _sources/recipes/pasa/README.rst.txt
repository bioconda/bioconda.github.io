.. title:: Package Recipe 'pasa'
.. highlight: bash


pasa
====

.. conda:recipe:: pasa
   :replaces_section_title:

   PASA\, acronym for Program to Assemble Spliced Alignments \(and pronounced \'pass\-uh\'\)\, is a eukaryotic genome annotation tool that exploits spliced alignments of expressed transcript sequences to automatically model gene structures\, and to maintain gene structure annotation consistent with the most recently available experimental sequence data. PASA also identifies and classifies all splicing variations supported by the transcript alignments.

   :homepage: https://pasapipeline.github.io/
   :license: Broad Institute
   :recipe: /`pasa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasa/meta.yaml>`_

   


.. conda:package:: pasa

   |downloads_pasa| |docker_pasa|

   :versions: 2.3.3

   :depends: :conda:package:`blat`  :conda:package:`cdbtools`  :conda:package:`fasta3`  :conda:package:`gmap`  :conda:package:`libgcc`  :conda:package:`lighttpd`  :conda:package:`perl`  :conda:package:`perl-cgi`  :conda:package:`perl-db-file`  :conda:package:`perl-dbd-sqlite`  :conda:package:`perl-uri`  :conda:package:`r-base`  :conda:package:`samtools`  :conda:package:`transdecoder` >=5.2.0 

   :required~by: |required_by_pasa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pasa

   and update with::

      conda update pasa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pasa


.. |required_by_pasa| conda:required_by:: pasa
.. |downloads_pasa| image:: https://img.shields.io/conda/dn/bioconda/pasa.svg?style=flat
   :alt:   (downloads)
.. |docker_pasa| image:: https://quay.io/repository/biocontainers/pasa/status
   :target: https://quay.io/repository/biocontainers/pasa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasa/README.html

