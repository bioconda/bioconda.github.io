:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panphlan'
.. highlight: bash

panphlan
========

.. conda:recipe:: panphlan/1.2
   :replaces_section_title:

   PanPhlAn is a strain\-level metagenomic profiling tool for identifying the 
   gene composition and in\-vivo transcriptional activity of individual strains 
   in metagenomic samples. PanPhlAn\'s ability for strain\-tracking and 
   functional analysis of unknown pathogens makes it an efficient tool for 
   culture\-free infectious outbreak epidemiology and microbial population 
   studies.

   :homepage: https://bitbucket.org/CibioCM/panphlan
   :license: MIT / MIT License
   :recipe: /`panphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panphlan>`_/`1.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panphlan/1.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panphlan/1.2/meta.yaml>`_

   


.. conda:package:: panphlan

   |downloads_panphlan| |docker_panphlan|

   :versions: 1.2-4, 1.2-3
   
   :depends biopython: 
   
   :depends bowtie2: >=2.0.0
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends samtools: 
   
   :depends setuptools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panphlan

   and update with::

      conda update panphlan

   or use the docker container::

      docker pull quay.io/biocontainers/panphlan:<tag>

   (see `panphlan/tags`_ for valid values for ``<tag>``)


.. |downloads_panphlan| image:: https://img.shields.io/conda/dn/bioconda/panphlan.svg?style=flat
   :alt:   (downloads)
.. |docker_panphlan| image:: https://quay.io/repository/biocontainers/panphlan/status
   :target: https://quay.io/repository/biocontainers/panphlan
.. _`panphlan/tags`: https://quay.io/repository/biocontainers/panphlan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panphlan/README.html