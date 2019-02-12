:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloflash'
.. highlight: bash

phyloflash
==========

.. conda:recipe:: phyloflash
   :replaces_section_title:

   phyloFlash is a pipeline to rapidly reconstruct the SSU rRNAs and explore
   phylogenetic composition of an illumina \(meta\)genomic dataset.

   :homepage: https://github.com/HRGV/phyloFlash
   :license: GPL / GPLv3
   :recipe: /`phyloflash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloflash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloflash/meta.yaml>`_

   


.. conda:package:: phyloflash

   |downloads_phyloflash| |docker_phyloflash|

   :versions: 3.3b1-0, 3.0b1-1, 3.0b1-0, 2.0beta6-0
   
   :depends bbmap: 
   
   :depends bedtools: 
   
   :depends emirge: 
   
   :depends mafft: 
   
   :depends perl: >=5.13.2
   
   :depends pigz: 
   
   :depends r-base: 
   
   :depends r-ggdendro: 
   
   :depends r-ggplot2: 
   
   :depends r-gtable: 
   
   :depends r-optparse: 
   
   :depends r-reshape2: 
   
   :depends samtools: 
   
   :depends spades: 
   
   :depends vsearch: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phyloflash

   and update with::

      conda update phyloflash

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phyloflash:<tag>

   (see `phyloflash/tags`_ for valid values for ``<tag>``)


.. |downloads_phyloflash| image:: https://img.shields.io/conda/dn/bioconda/phyloflash.svg?style=flat
   :alt:   (downloads)
.. |docker_phyloflash| image:: https://quay.io/repository/biocontainers/phyloflash/status
   :target: https://quay.io/repository/biocontainers/phyloflash
.. _`phyloflash/tags`: https://quay.io/repository/biocontainers/phyloflash?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloflash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloflash/README.html