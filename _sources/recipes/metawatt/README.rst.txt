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

   :versions: 3.5.3

   :depends: :conda:package:`aragorn`  :conda:package:`bbmap`  :conda:package:`blast`  :conda:package:`diamond` 0.7.* :conda:package:`fasttree`  :conda:package:`hmmer`  :conda:package:`mafft`  :conda:package:`openjdk`  :conda:package:`prodigal`  :conda:package:`samtools`  :conda:package:`wget`  

   :required~by: |required_by_metawatt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metawatt

   and update with::

      conda update metawatt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metawatt


.. |required_by_metawatt| conda:required_by:: metawatt
.. |downloads_metawatt| image:: https://img.shields.io/conda/dn/bioconda/metawatt.svg?style=flat
   :alt:   (downloads)
.. |docker_metawatt| image:: https://quay.io/repository/biocontainers/metawatt/status
   :target: https://quay.io/repository/biocontainers/metawatt






Notes
-----
metawatt \-\-help


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawatt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawatt/README.html

