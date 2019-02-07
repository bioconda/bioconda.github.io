.. title:: Package Recipe 'ngseqbasic'
.. highlight: bash


ngseqbasic
==========

.. conda:recipe:: ngseqbasic
   :replaces_section_title:

   Basic ChIP\/DNaseI\/ATAC analysis \- from FASTQ to visualisation of tracks\, in one command.

   :homepage: http://userweb.molbiol.ox.ac.uk/public/telenius/NGseqBasicManual/external/instructionsBioconda.html
   :license: GPL-3.0
   :recipe: /`ngseqbasic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngseqbasic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngseqbasic/meta.yaml>`_

   


.. conda:package:: ngseqbasic

   |downloads_ngseqbasic| |docker_ngseqbasic|

   :versions: 2.0.1

   :depends: :conda:package:`bedtools` ==2.17.0 :conda:package:`bowtie` ==1.0.0 :conda:package:`bowtie2` ==2.3.0 :conda:package:`flash` ==1.2.11 :conda:package:`perl` 5.22.0.1 :conda:package:`samtools` ==0.1.19 :conda:package:`trim-galore` ==0.4.1 :conda:package:`ucsc-bedclip` ==332 :conda:package:`ucsc-bedgraphpack` ==332 :conda:package:`ucsc-bedgraphtobigwig` ==332 :conda:package:`ucsc-bedtobigbed` ==332 

   :required~by: |required_by_ngseqbasic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngseqbasic

   and update with::

      conda update ngseqbasic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ngseqbasic


.. |required_by_ngseqbasic| conda:required_by:: ngseqbasic
.. |downloads_ngseqbasic| image:: https://img.shields.io/conda/dn/bioconda/ngseqbasic.svg?style=flat
   :alt:   (downloads)
.. |docker_ngseqbasic| image:: https://quay.io/repository/biocontainers/ngseqbasic/status
   :target: https://quay.io/repository/biocontainers/ngseqbasic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngseqbasic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngseqbasic/README.html

