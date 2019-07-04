:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaphlan2'
.. highlight: bash

metaphlan2
==========

.. conda:recipe:: metaphlan2/2.9.0
   :replaces_section_title:

   Metagenomic Phylogenetic Analysis

   :homepage: https://bitbucket.org/biobakery/metaphlan2
   :license: MIT / MIT License
   :recipe: /`metaphlan2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan2>`_/`2.9.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan2/2.9.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan2/2.9.0/meta.yaml>`_

   MetaPhlAn is a computational tool for profiling the composition of microbial
   communities \(Bacteria\, Archaea and Eukaryotes\) from metagenomic
   shotgun sequencing data with species level resolution. From version 2.0
   MetaPhlAn is also able to identify specific strains \(in the not\-so\-frequent
   cases in which the sample contains a previously sequenced strains\) and to
   track strains across samples for all species.



.. conda:package:: metaphlan2

   |downloads_metaphlan2| |docker_metaphlan2|

   :versions: 2.9.13-0, 2.9.12-0, 2.9.11-0, 2.9.1-0, 2.7.8-0, 2.7.7-4, 2.7.7-3, 2.7.7-2, 2.7.7-1, 2.7.5-1, 2.7.5-0, 2.6.0-2, 2.6.0-1, 2.5.0-2, 2.5.0-0, 2.2.0-1, 2.2.0-0
   
   :depends biom-format: 
   :depends biopython: 
   :depends blast: >=2.6.0
   :depends bowtie2: >=2.0.0
   :depends dendropy: 3.12.3.*
   :depends matplotlib: 
   :depends msgpack-python: 
   :depends muscle: >=3.8.1551
   :depends numpy: 1.14.2.*
   :depends pandas: 0.22.*
   :depends pysam: >=0.8.3
   :depends python: 2.7.*
   :depends raxml: >=8.2.10
   :depends requests: 
   :depends samtools: >=0.1.19,<1.0
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaphlan2

   and update with::

      conda update metaphlan2

   or use the docker container::

      docker pull quay.io/biocontainers/metaphlan2:<tag>

   (see `metaphlan2/tags`_ for valid values for ``<tag>``)


.. |downloads_metaphlan2| image:: https://img.shields.io/conda/dn/bioconda/metaphlan2.svg?style=flat
   :target: https://anaconda.org/bioconda/metaphlan2
   :alt:   (downloads)
.. |docker_metaphlan2| image:: https://quay.io/repository/biocontainers/metaphlan2/status
   :target: https://quay.io/repository/biocontainers/metaphlan2
.. _`metaphlan2/tags`: https://quay.io/repository/biocontainers/metaphlan2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphlan2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphlan2/README.html