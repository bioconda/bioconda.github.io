:orphan:  .. only available via index, not via toctree

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

   :versions: 2.3.3-1, 2.3.3-0
   
   :depends blat: 
   :depends cdbtools: 
   :depends fasta3: 
   :depends gmap: 
   :depends libgcc: 
   :depends lighttpd: 
   :depends perl: 
   :depends perl-cgi: 
   :depends perl-db-file: 
   :depends perl-dbd-sqlite: 
   :depends perl-uri: 
   :depends r-base: 
   :depends samtools: 
   :depends transdecoder: >=5.2.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pasa

   and update with::

      conda update pasa

   or use the docker container::

      docker pull quay.io/biocontainers/pasa:<tag>

   (see `pasa/tags`_ for valid values for ``<tag>``)


.. |downloads_pasa| image:: https://img.shields.io/conda/dn/bioconda/pasa.svg?style=flat
   :alt:   (downloads)
.. |docker_pasa| image:: https://quay.io/repository/biocontainers/pasa/status
   :target: https://quay.io/repository/biocontainers/pasa
.. _`pasa/tags`: https://quay.io/repository/biocontainers/pasa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasa/README.html