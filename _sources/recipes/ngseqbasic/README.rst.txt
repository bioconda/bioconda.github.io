:orphan:  .. only available via index, not via toctree

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

   :versions: 2.0.1-1, 2.0.1-0
   
   :depends bedtools: ==2.17.0
   
   :depends bowtie: ==1.0.0
   
   :depends bowtie2: ==2.3.0
   
   :depends flash: ==1.2.11
   
   :depends perl: 5.22.0.1
   
   :depends samtools: ==0.1.19
   
   :depends trim-galore: ==0.4.1
   
   :depends ucsc-bedclip: ==332
   
   :depends ucsc-bedgraphpack: ==332
   
   :depends ucsc-bedgraphtobigwig: ==332
   
   :depends ucsc-bedtobigbed: ==332
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngseqbasic

   and update with::

      conda update ngseqbasic

   or use the docker container::

      docker pull quay.io/biocontainers/ngseqbasic:<tag>

   (see `ngseqbasic/tags`_ for valid values for ``<tag>``)


.. |downloads_ngseqbasic| image:: https://img.shields.io/conda/dn/bioconda/ngseqbasic.svg?style=flat
   :alt:   (downloads)
.. |docker_ngseqbasic| image:: https://quay.io/repository/biocontainers/ngseqbasic/status
   :target: https://quay.io/repository/biocontainers/ngseqbasic
.. _`ngseqbasic/tags`: https://quay.io/repository/biocontainers/ngseqbasic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngseqbasic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngseqbasic/README.html