:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboseed'
.. highlight: bash

riboseed
========

.. conda:recipe:: riboseed
   :replaces_section_title:

   riboSeed\: assemble across rDNA regions

   :homepage: https://github.com/nickp60/riboSeed
   :license: MIT / MIT License
   :recipe: /`riboseed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseed/meta.yaml>`_

   Genome assembly polisher to bridge rDNA gaps


.. conda:package:: riboseed

   |downloads_riboseed| |docker_riboseed|

   :versions: 0.4.73-1, 0.4.73-0, 0.4.71-0, 0.4.70-2, 0.4.68-2, 0.4.67-2, 0.4.65-1, 0.4.47-1, 0.4.47-0, 0.4.16-0
   
   :depends barrnap: 0.7
   
   :depends bcftools: 1.5
   
   :depends biopython: 1.68
   
   :depends blast: 
   
   :depends bwa: 0.7.8
   
   :depends coverage: 4.4.1
   
   :depends emboss: 
   
   :depends jenkspy: 0.1.4
   
   :depends mafft: 
   
   :depends matplotlib: 1.5.3
   
   :depends networkx: 2.1
   
   :depends nose: 1.3.7
   
   :depends pandas: 0.20.1
   
   :depends prank: 
   
   :depends pyaml: 17.8.0
   
   :depends pysam: 0.11.2.2
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends samtools: 1.4.1
   
   :depends spades: 3.9.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riboseed

   and update with::

      conda update riboseed

   or use the docker container::

      docker pull quay.io/biocontainers/riboseed:<tag>

   (see `riboseed/tags`_ for valid values for ``<tag>``)


.. |downloads_riboseed| image:: https://img.shields.io/conda/dn/bioconda/riboseed.svg?style=flat
   :alt:   (downloads)
.. |docker_riboseed| image:: https://quay.io/repository/biocontainers/riboseed/status
   :target: https://quay.io/repository/biocontainers/riboseed
.. _`riboseed/tags`: https://quay.io/repository/biocontainers/riboseed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboseed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboseed/README.html