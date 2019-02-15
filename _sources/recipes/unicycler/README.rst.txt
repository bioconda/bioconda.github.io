:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unicycler'
.. highlight: bash

unicycler
=========

.. conda:recipe:: unicycler
   :replaces_section_title:

   Hybrid assembly pipeline for bacterial genomes

   :homepage: https://github.com/rrwick/Unicycler
   :license: GPL / GPL-3.0
   :recipe: /`unicycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicycler/meta.yaml>`_

   


.. conda:package:: unicycler

   |downloads_unicycler| |docker_unicycler|

   :versions: 0.4.7-0, 0.4.6-0, 0.4.4-0, 0.4.1-0, 0.3.0b-1, 0.3.0b-0, 0.2.0-0
   
   :depends blast: 
   
   :depends bowtie2: 
   
   :depends freebayes: 
   
   :depends libcxx: >=4.0.1
   
   :depends miniasm: 
   
   :depends openjdk: 
   
   :depends pilon: 
   
   :depends python: >=3.6,<3.7.0a0
   
   :depends racon: 
   
   :depends samtools: >=1.0
   
   :depends spades: >=3.6.2
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unicycler

   and update with::

      conda update unicycler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/unicycler:<tag>

   (see `unicycler/tags`_ for valid values for ``<tag>``)


.. |downloads_unicycler| image:: https://img.shields.io/conda/dn/bioconda/unicycler.svg?style=flat
   :alt:   (downloads)
.. |docker_unicycler| image:: https://quay.io/repository/biocontainers/unicycler/status
   :target: https://quay.io/repository/biocontainers/unicycler
.. _`unicycler/tags`: https://quay.io/repository/biocontainers/unicycler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unicycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unicycler/README.html