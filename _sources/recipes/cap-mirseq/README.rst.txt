:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cap-mirseq'
.. highlight: bash

cap-mirseq
==========

.. conda:recipe:: cap-mirseq
   :replaces_section_title:

   A comprehensive analysis pipeline for deep microRNA sequencing

   :homepage: http://bioinformaticstools.mayo.edu/research/cap-mirseq/
   :license: GPL
   :recipe: /`cap-mirseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap-mirseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap-mirseq/meta.yaml>`_

   


.. conda:package:: cap-mirseq

   |downloads_cap-mirseq| |docker_cap-mirseq|

   :versions: version-0
   
   :depends bedtools: >=2.17.0
   
   :depends bioconductor-edger: >=3.14.0
   
   :depends bowtie: >=1.1.2
   
   :depends fastqc: >=0.11.5
   
   :depends java-jdk: 
   
   :depends mirdeep2: >=2.0.0.7
   
   :depends perl-threaded: 
   
   :depends picard: >=1.97
   
   :depends r-base: 3.2.2*
   
   :depends r-essentials: 
   
   :depends samtools: >=0.1.19
   
   :depends vcftools: >=0.1.11
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cap-mirseq

   and update with::

      conda update cap-mirseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cap-mirseq:<tag>

   (see `cap-mirseq/tags`_ for valid values for ``<tag>``)


.. |downloads_cap-mirseq| image:: https://img.shields.io/conda/dn/bioconda/cap-mirseq.svg?style=flat
   :alt:   (downloads)
.. |docker_cap-mirseq| image:: https://quay.io/repository/biocontainers/cap-mirseq/status
   :target: https://quay.io/repository/biocontainers/cap-mirseq
.. _`cap-mirseq/tags`: https://quay.io/repository/biocontainers/cap-mirseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cap-mirseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cap-mirseq/README.html