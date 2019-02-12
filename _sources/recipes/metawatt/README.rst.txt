:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metawatt'
.. highlight: bash

metawatt
========

.. conda:recipe:: metawatt
   :replaces_section_title:

   MetaWatt is a metagenomic binning tool

   :homepage: https://sourceforge.net/projects/metawatt/
   :license: AFL
   :recipe: /`metawatt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawatt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawatt/meta.yaml>`_

   The Metawatt binner is a graphical binning tool that makes use of
   multivariate statistics of tetranucleotide frequencies and differential
   coverage based binning. It also performs taxonomic assessment of binning
   quality \(via diamond BLASTx\). Created bins can be edited and exported as
   fasta. The Metawatt is implemented in Java SWING and minimally depends on
   Diamond\, HMMer3.1\, BBMap\, Prodigal and the Batik library for the export of
   SVG graphics.



.. conda:package:: metawatt

   |downloads_metawatt| |docker_metawatt|

   :versions: 3.5.3-1, 3.5.3-0
   
   :depends aragorn: 
   
   :depends bbmap: 
   
   :depends blast: 
   
   :depends diamond: 0.7.*
   
   :depends fasttree: 
   
   :depends hmmer: 
   
   :depends mafft: 
   
   :depends openjdk: 
   
   :depends prodigal: 
   
   :depends samtools: 
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metawatt

   and update with::

      conda update metawatt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metawatt:<tag>

   (see `metawatt/tags`_ for valid values for ``<tag>``)


.. |downloads_metawatt| image:: https://img.shields.io/conda/dn/bioconda/metawatt.svg?style=flat
   :alt:   (downloads)
.. |docker_metawatt| image:: https://quay.io/repository/biocontainers/metawatt/status
   :target: https://quay.io/repository/biocontainers/metawatt
.. _`metawatt/tags`: https://quay.io/repository/biocontainers/metawatt?tab=tags






Notes
-----
metawatt \-\-help


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawatt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawatt/README.html