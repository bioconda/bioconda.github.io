:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylophlan'
.. highlight: bash

phylophlan
==========

.. conda:recipe:: phylophlan
   :replaces_section_title:
   :noindex:

   Precise phylogenetic analysis of microbial isolates and genomes from metagenomes

   :homepage: https://github.com/biobakery/phylophlan
   :license: MIT / MIT License
   :recipe: /`phylophlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylophlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylophlan/meta.yaml>`_

   PhyloPhlAn 3.0 is an integrated pipeline for large\-scale phylogenetic 
   profiling of genomes and metagenomes. PhyloPhlAn 3.0 is an accurate\, rapid\,
   and easy\-to\-use method for large\-scale microbial genome characterization 
   and phylogenetic analysis at multiple levels of resolution. PhyloPhlAn 3.0 
   can assign both genomes and metagenome\-assembled genomes \(MAGs\) to 
   species\-level genome bins \(SGBs\). PhyloPhlAn 3.0 can reconstruct 
   strain\-level phylogenies using clade\-specific maximally informative 
   phylogenetic markers\, and can also scale to very\-large phylogenies 
   comprising \>17\,000 microbial species.


.. conda:package:: phylophlan

   |downloads_phylophlan| |docker_phylophlan|

   :versions:
      
      

      ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      

   
   :depends biopython: ``>=1.73``
   :depends blast: ``>=2.6.0``
   :depends dendropy: ``>=4.4.0``
   :depends diamond: ``>=0.9``
   :depends fasttree: ``>=2.1.8``
   :depends iqtree: ``>=1.6.6``
   :depends mafft: ``>=7.310``
   :depends mash: 
   :depends matplotlib-base: ``>=3.1.0``
   :depends muscle: ``>=3.8.1551``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=0.24.2``
   :depends python: ``>=3.7``
   :depends raxml: ``>=8.2.10``
   :depends seaborn: ``>=0.9.0``
   :depends trimal: ``>=1.4.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylophlan

   and update with::

      conda update phylophlan

   or use the docker container::

      docker pull quay.io/biocontainers/phylophlan:<tag>

   (see `phylophlan/tags`_ for valid values for ``<tag>``)


.. |downloads_phylophlan| image:: https://img.shields.io/conda/dn/bioconda/phylophlan.svg?style=flat
   :target: https://anaconda.org/bioconda/phylophlan
   :alt:   (downloads)
.. |docker_phylophlan| image:: https://quay.io/repository/biocontainers/phylophlan/status
   :target: https://quay.io/repository/biocontainers/phylophlan
.. _`phylophlan/tags`: https://quay.io/repository/biocontainers/phylophlan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylophlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylophlan/README.html