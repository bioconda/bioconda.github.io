:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hla-la'
.. highlight: bash

hla-la
======

.. conda:recipe:: hla-la/1.0
   :replaces_section_title:

   HLA typing from short and long reads

   :homepage: https://github.com/DiltheyLab/HLA-LA
   :license: GPL
   :recipe: /`hla-la <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la>`_/`1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la/1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la/1.0/meta.yaml>`_
   :links: biotools: :biotools:`hla-la`

   


.. conda:package:: hla-la

   |downloads_hla-la| |docker_hla-la|

   :versions: 1.0-1, 1.0-0
   
   :depends boost-cpp: >=1.68.0,<1.68.1.0a0
   
   :depends bwa: 
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends mummer: 
   
   :depends perl-bio-db-hts: 
   
   :depends perl-bio-featureio: 
   
   :depends perl-bioperl: 
   
   :depends perl-bioperl-core: 
   
   :depends perl-list-moreutils: 
   
   :depends perl-text-levenshtein: 
   
   :depends picard: 
   
   :depends samtools: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hla-la

   and update with::

      conda update hla-la

   or use the docker container::

      docker pull quay.io/biocontainers/hla-la:<tag>

   (see `hla-la/tags`_ for valid values for ``<tag>``)


.. |downloads_hla-la| image:: https://img.shields.io/conda/dn/bioconda/hla-la.svg?style=flat
   :alt:   (downloads)
.. |docker_hla-la| image:: https://quay.io/repository/biocontainers/hla-la/status
   :target: https://quay.io/repository/biocontainers/hla-la
.. _`hla-la/tags`: https://quay.io/repository/biocontainers/hla-la?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hla-la/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hla-la/README.html