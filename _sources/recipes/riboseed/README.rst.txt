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

   :versions: 0.4.90-0, 0.4.89-0, 0.4.88-0, 0.4.87-0, 0.4.86-0, 0.4.73-1, 0.4.73-0, 0.4.71-0, 0.4.70-2, 0.4.68-2, 0.4.67-2, 0.4.65-1, 0.4.47-1, 0.4.47-0, 0.4.16-0
   
   :depends barrnap: 
   :depends bcbiogff: 
   :depends bcftools: 
   :depends biopython: 
   :depends blast: 
   :depends bwa: 
   :depends coverage: 
   :depends jenkspy: 
   :depends mafft: 
   :depends matplotlib: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends prank: 
   :depends pyaml: 
   :depends pysam: 
   :depends python: 3.5.*
   :depends quast: >=4.6.3
   :depends samtools: 
   :depends skesa: 
   :depends spades: 3.9.1
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
   :target: https://anaconda.org/bioconda/riboseed
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